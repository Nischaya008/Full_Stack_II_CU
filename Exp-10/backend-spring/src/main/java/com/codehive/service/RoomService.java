package com.codehive.service;

import com.codehive.dto.Dtos;
import com.codehive.model.Room;
import com.codehive.model.User;
import com.codehive.repository.RoomRepository;
import com.codehive.repository.UserRepository;
import com.pusher.rest.Pusher;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class RoomService {

    private final RoomRepository roomRepository;
    private final UserRepository userRepository;
    private final Pusher pusher;

    public RoomService(RoomRepository roomRepository,
                       UserRepository userRepository,
                       Pusher pusher) {
        this.roomRepository = roomRepository;
        this.userRepository = userRepository;
        this.pusher = pusher;
    }

    @Transactional
    public Map<String, Object> createRoom(String name, Long userId) {
        if (roomRepository.existsByName(name)) {
            throw new IllegalArgumentException("A room with this name already exists");
        }

        User creator = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Room room = new Room(name, UUID.randomUUID().toString(), creator);
        room = roomRepository.save(room);

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("success", true);

        Map<String, Object> roomData = new LinkedHashMap<>();
        roomData.put("name", room.getName());
        roomData.put("roomId", room.getRoomId());
        roomData.put("createdBy", room.getCreatedBy().getId());
        roomData.put("createdAt", room.getCreatedAt());
        result.put("room", roomData);

        return result;
    }

    @Transactional
    public void joinRoom(String roomId, Long userId) {
        Room room = roomRepository.findByRoomId(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Add user to room's active users
        room.getUsers().add(user);
        roomRepository.save(room);

        // Update user's recent rooms: remove if exists, add to end, keep last 5
        List<String> rooms = user.getRooms();
        rooms.remove(room.getRoomId());
        rooms.add(room.getRoomId());
        if (rooms.size() > 5) {
            rooms.remove(0);
        }
        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public List<Map<String, Object>> getAllRooms() {
        List<Room> rooms = roomRepository.findAllWithCreatedBy();
        return rooms.stream().map(room -> {
            Map<String, Object> map = new LinkedHashMap<>();
            map.put("name", room.getName());
            map.put("roomId", room.getRoomId());
            map.put("createdBy", new Dtos.UserBriefDto(
                room.getCreatedBy().getId(), room.getCreatedBy().getUsername()));
            map.put("lastActive", room.getLastActive());
            map.put("createdAt", room.getCreatedAt());
            return map;
        }).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<Map<String, Object>> getUserRooms(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<String> uniqueRoomIds = new ArrayList<>(new LinkedHashSet<>(user.getRooms()));
        int start = Math.max(0, uniqueRoomIds.size() - 5);
        List<String> recentIds = uniqueRoomIds.subList(start, uniqueRoomIds.size());

        List<Map<String, Object>> result = new ArrayList<>();
        for (int i = recentIds.size() - 1; i >= 0; i--) {
            Optional<Room> optRoom = roomRepository.findByRoomIdWithCreatedBy(recentIds.get(i));
            optRoom.ifPresent(room -> {
                Map<String, Object> map = new LinkedHashMap<>();
                map.put("name", room.getName());
                map.put("roomId", room.getRoomId());
                map.put("createdBy", new Dtos.UserBriefDto(
                    room.getCreatedBy().getId(), room.getCreatedBy().getUsername()));
                result.add(map);
            });
        }
        return result;
    }

    @Transactional(readOnly = true)
    public List<Dtos.UserBriefDto> getRoomUsers(String roomId, Long currentUserId) {
        Room room = roomRepository.findByRoomIdWithUsers(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        return room.getUsers().stream()
                .filter(Objects::nonNull)
                .map(u -> new Dtos.UserBriefDto(u.getId(), u.getUsername()))
                .distinct()
                .sorted((a, b) -> {
                    if (a.id().equals(currentUserId)) return -1;
                    if (b.id().equals(currentUserId)) return 1;
                    return 0;
                })
                .collect(Collectors.toList());
    }

    @Transactional
    public void leaveRoom(String roomId, Long userId) {
        Room room = roomRepository.findByRoomIdWithUsers(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        room.getUsers().removeIf(u -> u.getId().equals(userId));
        roomRepository.save(room);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getRoomDetails(String roomId) {
        Room room = roomRepository.findByRoomIdWithCreatedBy(roomId)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        Map<String, Object> roomData = new LinkedHashMap<>();
        roomData.put("name", room.getName());
        roomData.put("roomId", room.getRoomId());
        roomData.put("createdBy", new Dtos.UserBriefDto(
            room.getCreatedBy().getId(), room.getCreatedBy().getUsername()));

        Map<String, Object> result = new LinkedHashMap<>();
        result.put("success", true);
        result.put("room", roomData);
        return result;
    }

    @Transactional
    public void deleteRoom(String roomId) {
        roomRepository.deleteByRoomId(roomId);
    }

    // ──── Pusher broadcast methods ────

    public void broadcastCodeUpdate(String roomId, String code, Long userId) {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("code", code);
        data.put("userId", userId);
        data.put("timestamp", LocalDateTime.now().toString());
        pusher.trigger("room-" + roomId, "code-update", data);
    }

    public void broadcastLanguageUpdate(String roomId, String language, Long userId) {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("language", language);
        data.put("userId", userId);
        data.put("timestamp", LocalDateTime.now().toString());
        pusher.trigger("room-" + roomId, "language-update", data);
    }

    public void broadcastTerminalsUpdate(String roomId, String input, String output,
                                          boolean isLoading, Long userId) {
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("input", input);
        data.put("output", output);
        data.put("isLoading", isLoading);
        data.put("userId", userId);
        data.put("timestamp", LocalDateTime.now().toString());
        pusher.trigger("room-" + roomId, "terminals-update", data);
    }

    public void broadcastFileSelection(String roomId, Map<String, Object> file, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Map<String, Object> data = new LinkedHashMap<>();
        data.put("file", file);
        data.put("userId", userId);
        data.put("username", user.getUsername());
        data.put("timestamp", LocalDateTime.now().toString());
        pusher.trigger("room-" + roomId, "file-selection", data);
    }
}
