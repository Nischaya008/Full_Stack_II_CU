package com.codehive.service;

import com.codehive.dto.Dtos;
import com.codehive.model.User;
import com.codehive.repository.UserRepository;
import com.codehive.security.JwtUtil;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public UserService(UserRepository userRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    public Dtos.AuthResponse signup(Dtos.SignupRequest request) {
        if (userRepository.existsByEmail(request.email())) {
            throw new RuntimeException("User already exists");
        }

        User user = new User(request.username(), request.email(),
                passwordEncoder.encode(request.password()));
        user = userRepository.save(user);

        String token = jwtUtil.generateToken(user.getId(), user.getEmail());

        return new Dtos.AuthResponse(
            new Dtos.UserDto(user.getId(), user.getUsername(), user.getEmail(), user.getRooms()),
            token
        );
    }

    public Dtos.AuthResponse signin(Dtos.SigninRequest request) {
        User user = userRepository.findByEmailOrUsername(request.emailOrUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.password(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid credentials");
        }

        String token = jwtUtil.generateToken(user.getId(), user.getEmail());

        return new Dtos.AuthResponse(
            new Dtos.UserDto(user.getId(), user.getUsername(), user.getEmail(), user.getRooms()),
            token
        );
    }
}
