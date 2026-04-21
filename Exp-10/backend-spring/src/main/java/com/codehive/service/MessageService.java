package com.codehive.service;

import com.codehive.dto.Dtos;
import com.codehive.model.Message;
import com.codehive.model.User;
import com.codehive.repository.MessageRepository;
import com.codehive.repository.UserRepository;
import com.pusher.rest.Pusher;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final Pusher pusher;

    public MessageService(MessageRepository messageRepository,
                          UserRepository userRepository,
                          Pusher pusher) {
        this.messageRepository = messageRepository;
        this.userRepository = userRepository;
        this.pusher = pusher;
    }

    @Transactional
    public Message createMessage(String content, String roomId, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Message message = new Message(content, roomId, user);
        message = messageRepository.save(message);

        // Broadcast via Pusher
        Map<String, Object> data = new LinkedHashMap<>();
        data.put("content", content);
        data.put("userId", userId);
        data.put("username", user.getUsername());
        data.put("timestamp", message.getCreatedAt().toString());
        pusher.trigger("room-" + roomId + "-chat", "new-message", data);

        return message;
    }

    @Transactional(readOnly = true)
    public List<Dtos.MessageDto> getRoomMessages(String roomId) {
        List<Message> messages = messageRepository.findByRoomIdOrderByCreatedAtAsc(
            roomId, PageRequest.of(0, 100));

        return messages.stream().map(msg -> new Dtos.MessageDto(
            msg.getContent(),
            msg.getUser().getId(),
            msg.getUser().getUsername(),
            msg.getCreatedAt()
        )).collect(Collectors.toList());
    }
}
