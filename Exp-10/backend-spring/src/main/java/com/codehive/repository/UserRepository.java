package com.codehive.repository;

import com.codehive.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.email = :value OR u.username = :value")
    Optional<User> findByEmailOrUsername(@Param("value") String value);

    boolean existsByEmail(String email);
}
