package com.codehive.repository;

import com.codehive.model.CodeFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CodeFileRepository extends JpaRepository<CodeFile, Long> {
    List<CodeFile> findByRoomIdOrderByUpdatedAtDesc(String roomId);
    Optional<CodeFile> findByNameAndRoomId(String name, String roomId);
}
