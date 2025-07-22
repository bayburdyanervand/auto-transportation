package com.auto.backend.controller;

import com.auto.backend.entity.Manager;
import com.auto.backend.service.ManagerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/manager")
@CrossOrigin(origins = "*")
public class ManagerController {

    private final ManagerService managerService;
    private static final Logger logger = LoggerFactory.getLogger(ManagerController.class);

    public ManagerController(ManagerService managerService) {
        this.managerService = managerService;
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Manager>> getAllManagers() {
        List<Manager> managers = managerService.getAllManagers();
        logger.info("получение  {} менеджеров", managers.size());
        return ResponseEntity.ok(managers);
    }
}
