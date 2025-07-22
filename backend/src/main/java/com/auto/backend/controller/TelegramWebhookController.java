package com.auto.backend.controller;

import com.auto.backend.entity.Manager;
import com.auto.backend.repository.ManagerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/telegram")
public class TelegramWebhookController {

    private final ManagerRepository managerRepository;

    public TelegramWebhookController(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    @PostMapping("/webhook")
    public ResponseEntity<Void> receiveUpdate(@RequestBody Map<String, Object> update) {
        try {
            Map<String, Object> message = (Map<String, Object>) update.get("message");
            if (message == null) return ResponseEntity.ok().build();

            Map<String, Object> from = (Map<String, Object>) message.get("from");
            Map<String, Object> chat = (Map<String, Object>) message.get("chat");

            if (from == null || chat == null) return ResponseEntity.ok().build();

            String username = (String) from.get("username");
            Long chatId = Long.valueOf(chat.get("id").toString());

            if (username != null) {
                Optional<Manager> optionalManager = managerRepository.findByTelegramUsername(username);
                if (optionalManager.isPresent()) {
                    Manager manager = optionalManager.get();
                    manager.setTelegramChatId(chatId);
                    managerRepository.save(manager);
                    System.out.println("✅ Chat ID сохранён для @" + username);
                } else {
                    System.out.println("⚠️ Менеджер с username @" + username + " не найден.");
                }
            }

        } catch (Exception e) {
            System.err.println("❌ Ошибка при обработке Telegram webhook: " + e.getMessage());
        }

        return ResponseEntity.ok().build();
    }
}
