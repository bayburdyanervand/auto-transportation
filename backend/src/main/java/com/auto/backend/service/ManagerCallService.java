package com.auto.backend.service;

import com.auto.backend.dto.ManagerCallRequestDTO;
import com.auto.backend.entity.Manager;
import com.auto.backend.entity.ManagerCallRequest;
import com.auto.backend.repository.ManagerCallRequestRepository;
import com.auto.backend.repository.ManagerRepository;
import org.springframework.stereotype.Service;

@Service
public class ManagerCallService {

    private final ManagerRepository managerRepository;
    private final ManagerCallRequestRepository requestRepository;
    private final EmailService emailService;
    private  final TelegramService telegramService;

    public ManagerCallService(ManagerRepository managerRepository,
                              ManagerCallRequestRepository requestRepository,
                              EmailService emailService, TelegramService telegramService) {
        this.managerRepository = managerRepository;
        this.requestRepository = requestRepository;
        this.emailService = emailService;
        this.telegramService = telegramService;
    }

    public void handleCallRequest(Long managerId, ManagerCallRequestDTO dto) {
        Manager manager = managerRepository.findById(managerId)
                .orElseThrow(() -> new RuntimeException("Manager not found"));

        ManagerCallRequest request = new ManagerCallRequest();
        request.setManager(manager);
        request.setFullName(dto.getFullName());
        request.setPhone(dto.getPhone());
        request.setEmail(dto.getEmail());
        request.setCity(dto.getCity());

        requestRepository.save(request);
        emailService.sendManagerNotification(manager.getEmail(), dto);

        if (manager.getTelegramChatId() != null) {
            String message = String.format(
                    "📞 Новая заявка на звонок\n\n👤 %s\n📱 %s\n📧 %s\n🏙️ %s",
                    dto.getFullName(),
                    dto.getPhone(),
                    dto.getEmail(),
                    dto.getCity()
            );
            telegramService.sendNotificationToChatId(manager.getTelegramChatId(), message);
        }

    }
}
