package com.auto.backend.repository;

import com.auto.backend.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
    Optional<Manager> findByTelegramUsername(String telegramUsername);

}