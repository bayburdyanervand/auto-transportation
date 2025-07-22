package com.auto.backend.service;

import com.auto.backend.dto.RegistrationRequest;
import com.auto.backend.entity.Role;
import com.auto.backend.entity.User;
import com.auto.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.UUID;

@Service
public class RegistrationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final EmailService emailService;

    public RegistrationService(UserRepository userRepository,
                               PasswordEncoder passwordEncoder,
                               EmailService emailService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }

    public void register(RegistrationRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Пользователь с таким email уже зарегистрирован");
        }

        String rawPassword = generateRandomPassword();
        String encodedPassword = passwordEncoder.encode(rawPassword);

        User user = new User();
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setCity(request.getCity());
        user.setPhone(request.getPhone());
        user.setExperienceLevel(request.getExperienceLevel());
        user.setServices(request.getServices());
        user.setPassword(encodedPassword);
        user.setRole(Role.USER);

        userRepository.save(user);

        emailService.sendPasswordEmail(user.getEmail(), rawPassword);
    }

    private String generateRandomPassword() {
        return UUID.randomUUID().toString().substring(0, 8);
    }
}

