package com.codehive.repository;

import com.codehive.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface RoomRepository extends JpaRepository<Room, Long> {
    Optional<Room> findByRoomId(String roomId);
    Optional<Room> findByName(String name);
    boolean existsByName(String name);

    @Query("SELECT r FROM Room r LEFT JOIN FETCH r.users WHERE r.roomId = :roomId")
    Optional<Room> findByRoomIdWithUsers(@Param("roomId") String roomId);

    @Query("SELECT r FROM Room r JOIN FETCH r.createdBy WHERE r.roomId = :roomId")
    Optional<Room> findByRoomIdWithCreatedBy(@Param("roomId") String roomId);

    @Query("SELECT r FROM Room r JOIN FETCH r.createdBy")
    List<Room> findAllWithCreatedBy();

    void deleteByRoomId(String roomId);
}
