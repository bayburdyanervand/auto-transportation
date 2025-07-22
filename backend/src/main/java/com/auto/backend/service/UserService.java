package com.auto.backend.service;

import com.auto.backend.dto.UserResponseDTO;
import com.auto.backend.entity.User;
import com.auto.backend.repository.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDTO  getCurrentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Пользователь не найден"));


        return new UserResponseDTO(
                user.getFullName(),
                user.getEmail(),
                user.getCity(),
                user.getPhone(),
                user.getExperienceLevel()
        );
    }
}
