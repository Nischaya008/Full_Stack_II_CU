package com.codehive.controller;

import com.codehive.dto.Dtos;
import com.codehive.service.MessageService;
import com.codehive.service.RoomService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {

    private final RoomService roomService;
    private final MessageService messageService;

    public RoomController(RoomService roomService, MessageService messageService) {
        this.roomService = roomService;
        this.messageService = messageService;
    }

    private Long getCurrentUserId() {
        return (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody Dtos.RoomRequest request) {
        try {
            Map<String, Object> result = roomService.createRoom(request.name(), getCurrentUserId());
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body(Map.of("success", false, "message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllRooms() {
        try {
            List<Map<String, Object>> rooms = roomService.getAllRooms();
            return ResponseEntity.ok(Map.of("success", true, "rooms", rooms));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserRooms(@PathVariable Long userId) {
        try {
            List<Map<String, Object>> rooms = roomService.getUserRooms(getCurrentUserId());
            return ResponseEntity.ok(Map.of("success", true, "rooms", rooms));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/{roomId}/users")
    public ResponseEntity<?> getRoomUsers(@PathVariable String roomId) {
        try {
            List<Dtos.UserBriefDto> users = roomService.getRoomUsers(roomId, getCurrentUserId());
            return ResponseEntity.ok(Map.of("success", true, "users", users));
        } catch (RuntimeException e) {
            if (e.getMessage().equals("Room not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("success", false, "message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/{roomId}/join")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId) {
        try {
            roomService.joinRoom(roomId, getCurrentUserId());
            return ResponseEntity.ok(Map.of("success", true, "message", "Joined room successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/{roomId}/leave")
    public ResponseEntity<?> leaveRoom(@PathVariable String roomId) {
        try {
            roomService.leaveRoom(roomId, getCurrentUserId());
            return ResponseEntity.ok(Map.of("success", true, "message", "Left room successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/{roomId}/details")
    public ResponseEntity<?> getRoomDetails(@PathVariable String roomId) {
        try {
            Map<String, Object> result = roomService.getRoomDetails(roomId);
            return ResponseEntity.ok(result);
        } catch (RuntimeException e) {
            if (e.getMessage().equals("Room not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("success", false, "message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // Also map plain /{roomId} GET to getRoomDetails (used by handleJoinRoom in landing page)
    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoomById(@PathVariable String roomId) {
        // Avoid matching /user path
        if ("user".equals(roomId)) {
            return ResponseEntity.badRequest().body(Map.of("success", false, "message", "Invalid room ID"));
        }
        return getRoomDetails(roomId);
    }

    @DeleteMapping("/{roomId}")
    public ResponseEntity<?> deleteRoom(@PathVariable String roomId) {
        try {
            roomService.deleteRoom(roomId);
            return ResponseEntity.ok(Map.of("success", true, "message", "Room deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ──── Pusher broadcast endpoints ────

    @PostMapping("/{roomId}/code")
    public ResponseEntity<?> updateCode(@PathVariable String roomId,
                                         @RequestBody Dtos.CodeUpdateRequest request) {
        try {
            roomService.broadcastCodeUpdate(roomId, request.code(), request.userId());
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/{roomId}/language")
    public ResponseEntity<?> updateLanguage(@PathVariable String roomId,
                                             @RequestBody Dtos.LanguageUpdateRequest request) {
        try {
            roomService.broadcastLanguageUpdate(roomId, request.language(), request.userId());
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/{roomId}/terminals")
    public ResponseEntity<?> updateTerminals(@PathVariable String roomId,
                                              @RequestBody Dtos.TerminalsUpdateRequest request) {
        try {
            roomService.broadcastTerminalsUpdate(roomId, request.input(), request.output(),
                    request.isLoading(), request.userId());
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @PostMapping("/{roomId}/file-selection")
    public ResponseEntity<?> updateFileSelection(@PathVariable String roomId,
                                                   @RequestBody Dtos.FileSelectionRequest request) {
        try {
            roomService.broadcastFileSelection(roomId, request.file(), request.userId());
            return ResponseEntity.ok(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    // ──── Message endpoints (under /api/rooms/{roomId}/messages) ────

    @PostMapping("/{roomId}/messages")
    public ResponseEntity<?> createMessage(@PathVariable String roomId,
                                            @RequestBody Dtos.MessageRequest request) {
        try {
            messageService.createMessage(request.content(), roomId, getCurrentUserId());
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of("success", true));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<?> getRoomMessages(@PathVariable String roomId) {
        try {
            List<Dtos.MessageDto> messages = messageService.getRoomMessages(roomId);
            return ResponseEntity.ok(Map.of("success", true, "messages", messages));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
