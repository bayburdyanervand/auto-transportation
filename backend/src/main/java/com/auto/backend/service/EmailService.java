package com.auto.backend.service;

import com.auto.backend.dto.ManagerCallRequestDTO;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendPasswordEmail(String to, String password) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject("Ваш пароль для входа");
            helper.setText("Здравствуйте!\n\nВаш временный пароль: **" + password + "**\n\nНе забудьте сменить его позже.", true);
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Не удалось отправить email: " + e.getMessage());
        }
    }

    public void sendManagerNotification(String to, ManagerCallRequestDTO dto) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(to);
            helper.setSubject("Новый запрос звонка от клиента");

            String content = String.format(
                    """
                    Добрый день!
    
                    Клиент запросил звонок:
    
                    Имя: %s
                    Город: %s
                    Телефон: %s
                    Email: %s
    
                    Свяжитесь с ним как можно скорее.
                    """,
                    dto.getFullName(),
                    dto.getCity(),
                    dto.getPhone(),
                    dto.getEmail() != null ? dto.getEmail() : "не указано"
            );

            helper.setText(content, false); // не HTML
            mailSender.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException("Не удалось отправить email менеджеру: " + e.getMessage());
        }
    }
}
