package com.auto.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders; // Исправленный импорт
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@Service
public class TelegramService {

    @Value("${telegram.bot.token}")
    private String botToken;

    @Value("${telegram.chat.id}")
    private String chatId;

    private final RestTemplate restTemplate = new RestTemplate();

    public void sendNotificationToChatId(Long chatId, String message) {
        if (chatId == null) return;

        String url = String.format("https://api.telegram.org/bot%s/sendMessage", botToken);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("chat_id", chatId);
        requestBody.put("text", message);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> request = new HttpEntity<>(requestBody, headers);

        restTemplate.postForEntity(url, request, String.class);
    }
}