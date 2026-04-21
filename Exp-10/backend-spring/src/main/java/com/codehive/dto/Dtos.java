package com.codehive.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

/**
 * All DTOs used for request/response serialization.
 * Consolidated into one file for brevity.
 */
public class Dtos {

    // ──── Request DTOs ────

    public record SignupRequest(String username, String email, String password) {}

    public record SigninRequest(String emailOrUsername, String password) {}

    public record RoomRequest(String name) {}

    public record CodeUpdateRequest(String code, Long userId) {}

    public record LanguageUpdateRequest(String language, Long userId) {}

    public record TerminalsUpdateRequest(String input, String output, boolean isLoading, Long userId) {}

    public record FileSelectionRequest(Map<String, Object> file, Long userId) {}

    public record FileRequest(String name, String content, String language, String roomId) {}

    public record MessageRequest(String content) {}

    // ──── Response DTOs ────

    public record AuthResponse(UserDto user, String token) {}

    public record UserDto(Long id, String username, String email, List<String> rooms) {}

    public record UserBriefDto(Long id, String username) {}

    public record RoomDto(String name, String roomId, UserBriefDto createdBy) {}

    public record FileDto(Long id, String name, String content, String language,
                          String roomId, UserBriefDto createdBy,
                          LocalDateTime createdAt, LocalDateTime updatedAt) {}

    public record MessageDto(String content, Long userId, String username, LocalDateTime timestamp) {}
}
