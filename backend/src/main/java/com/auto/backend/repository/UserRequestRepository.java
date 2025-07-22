package com.auto.backend.repository;

import com.auto.backend.entity.UserRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRequestRepository extends JpaRepository<UserRequest, Long> {
}
