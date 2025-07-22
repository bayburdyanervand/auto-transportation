package com.auto.backend.controller;

import com.auto.backend.dto.ManagerCallRequestDTO;
import com.auto.backend.service.ManagerCallService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/manager-call")
@CrossOrigin
public class ManagerCallController {

    private final ManagerCallService callService;

    public ManagerCallController(ManagerCallService callService) {
        this.callService = callService;
    }

    @PostMapping("/{managerId}")
    public ResponseEntity<Map<String, String>> requestCall(@PathVariable Long managerId,
                                            @RequestBody ManagerCallRequestDTO dto) {
        callService.handleCallRequest(managerId, dto);
        return ResponseEntity.ok(Map.of("message", "Заявка на звонок успешно отправлена"));
    }
}
