package com.auto.backend.dto;

import com.auto.backend.entity.User;

public class UserResponseDTO {
    private String fullName;
    private String email;
    private String city;
    private String phone;
    private String experienceLevel;

    public UserResponseDTO(User user) {
        this.fullName = user.getFullName();
        this.email = user.getEmail();
        this.city = user.getCity();
        this.phone = user.getPhone();
        this.experienceLevel = user.getExperienceLevel();
    }

    public UserResponseDTO(String fullName, String email, String city, String phone, String experienceLevel) {
        this.fullName = fullName;
        this.email = email;
        this.city = city;
        this.phone = phone;
        this.experienceLevel = experienceLevel;
    }

    // Геттеры и сеттеры
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getExperienceLevel() {
        return experienceLevel;
    }

    public void setExperienceLevel(String experienceLevel) {
        this.experienceLevel = experienceLevel;
    }
}