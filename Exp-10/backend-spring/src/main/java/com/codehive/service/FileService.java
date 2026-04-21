package com.codehive.service;

import com.codehive.dto.Dtos;
import com.codehive.model.CodeFile;
import com.codehive.model.User;
import com.codehive.repository.CodeFileRepository;
import com.codehive.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FileService {

    private final CodeFileRepository fileRepository;
    private final UserRepository userRepository;

    public FileService(CodeFileRepository fileRepository, UserRepository userRepository) {
        this.fileRepository = fileRepository;
        this.userRepository = userRepository;
    }

    private Dtos.FileDto toDto(CodeFile f) {
        User creator = f.getCreatedBy();
        return new Dtos.FileDto(
            f.getId(), f.getName(), f.getContent(), f.getLanguage(),
            f.getRoomId(),
            new Dtos.UserBriefDto(creator.getId(), creator.getUsername()),
            f.getCreatedAt(), f.getUpdatedAt()
        );
    }

    @Transactional
    public Dtos.FileDto createOrUpdate(Dtos.FileRequest request, Long userId) {
        Optional<CodeFile> existing = fileRepository.findByNameAndRoomId(
            request.name(), request.roomId());

        if (existing.isPresent()) {
            CodeFile file = existing.get();
            file.setContent(request.content());
            file.setLanguage(request.language());
            file = fileRepository.save(file);
            return toDto(file);
        }

        User creator = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        CodeFile file = new CodeFile(request.name(), request.content(),
                request.language(), request.roomId(), creator);
        file = fileRepository.save(file);
        return toDto(file);
    }

    @Transactional(readOnly = true)
    public List<Dtos.FileDto> getRoomFiles(String roomId) {
        return fileRepository.findByRoomIdOrderByUpdatedAtDesc(roomId)
                .stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Dtos.FileDto getFile(Long fileId) {
        CodeFile file = fileRepository.findById(fileId)
                .orElseThrow(() -> new RuntimeException("File not found"));
        return toDto(file);
    }

    @Transactional
    public void deleteFile(Long fileId, Long userId) {
        CodeFile file = fileRepository.findById(fileId)
                .orElseThrow(() -> new RuntimeException("File not found"));

        if (!file.getCreatedBy().getId().equals(userId)) {
            throw new SecurityException("Not authorized");
        }

        fileRepository.delete(file);
    }
}
