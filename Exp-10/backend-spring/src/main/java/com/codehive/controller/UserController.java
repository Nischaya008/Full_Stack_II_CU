package com.codehive.controller;

import com.codehive.dto.Dtos;
import com.codehive.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Dtos.SignupRequest request) {
        try {
            if (request.username() == null || request.email() == null || request.password() == null ||
                request.username().isBlank() || request.email().isBlank() || request.password().isBlank()) {
                return ResponseEntity.badRequest().body(Map.of(
                    "message", "Missing required fields",
                    "received", Map.of(
                        "username", request.username() != null,
                        "email", request.email() != null,
                        "password", request.password() != null
                    )
                ));
            }

            Dtos.AuthResponse response = userService.signup(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (RuntimeException e) {
            if (e.getMessage().equals("User already exists")) {
                return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Server error during signup"));
        }
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody Dtos.SigninRequest request) {
        try {
            Dtos.AuthResponse response = userService.signin(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            if (e.getMessage().equals("User not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("message", e.getMessage()));
            }
            if (e.getMessage().equals("Invalid credentials")) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", e.getMessage()));
        }
    }
}
