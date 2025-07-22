package com.auto.backend.controller;

import com.auto.backend.dto.VinResponseDTO;
import com.auto.backend.service.VinService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/vin")
public class VinController {
    private final VinService vinService;

    public VinController(VinService vinService) {
        this.vinService = vinService;
    }

    @GetMapping("/decode/{vin}")
    public ResponseEntity<VinResponseDTO> decodeVin(@PathVariable String vin) {
        try {
            VinResponseDTO response = vinService.decodeVin(vin);
            if (response.getErrorMessage() != null) {
                return ResponseEntity.badRequest().body(response);
            }
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            VinResponseDTO errorResponse = new VinResponseDTO();
            errorResponse.setErrorMessage("Ошибка при декодировании VIN: " + e.getMessage());
            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}