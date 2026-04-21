package com.codehive.controller;

import com.codehive.dto.Dtos;
import com.codehive.service.FileService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/files")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    private Long getCurrentUserId() {
        return (Long) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

    @PostMapping
    public ResponseEntity<?> createFile(@RequestBody Dtos.FileRequest request) {
        try {
            Dtos.FileDto file = fileService.createOrUpdate(request, getCurrentUserId());
            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of("success", true, "file", file));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/room/{roomId}")
    public ResponseEntity<?> getRoomFiles(@PathVariable String roomId) {
        try {
            List<Dtos.FileDto> files = fileService.getRoomFiles(roomId);
            return ResponseEntity.ok(Map.of("success", true, "files", files));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @GetMapping("/{fileId}")
    public ResponseEntity<?> getFile(@PathVariable Long fileId) {
        try {
            Dtos.FileDto file = fileService.getFile(fileId);
            return ResponseEntity.ok(Map.of("success", true, "file", file));
        } catch (RuntimeException e) {
            if (e.getMessage().equals("File not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("success", false, "message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }

    @DeleteMapping("/{fileId}")
    public ResponseEntity<?> deleteFile(@PathVariable Long fileId) {
        try {
            fileService.deleteFile(fileId, getCurrentUserId());
            return ResponseEntity.ok(Map.of("success", true, "message", "File deleted successfully"));
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN)
                    .body(Map.of("success", false, "message", e.getMessage()));
        } catch (RuntimeException e) {
            if (e.getMessage().equals("File not found")) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body(Map.of("success", false, "message", e.getMessage()));
            }
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("success", false, "message", e.getMessage()));
        }
    }
}
