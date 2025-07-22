package com.auto.backend.controller;

import com.auto.backend.dto.RegistrationRequest;
import com.auto.backend.service.RegistrationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

// com.auto.backend.controller.RegistrationController.java
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class RegistrationController {

    private final RegistrationService registrationService;

    public RegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody RegistrationRequest request) {
        registrationService.register(request);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Регистрация успешна. Пароль отправлен на email.");
        return ResponseEntity.ok(response);
    }
}
