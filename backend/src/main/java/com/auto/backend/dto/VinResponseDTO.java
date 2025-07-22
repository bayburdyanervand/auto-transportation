package com.auto.backend.dto;

public class VinResponseDTO {
    private String vin;
    private String make;
    private String model;
    private String modelYear;
    private String manufacturer;
    private String vehicleType;
    private String bodyClass;
    private String errorMessage;

    // Конструкторы
    public VinResponseDTO() {}

    public VinResponseDTO(String vin, String make, String model, String modelYear, String manufacturer, String vehicleType, String bodyClass) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.modelYear = modelYear;
        this.manufacturer = manufacturer;
        this.vehicleType = vehicleType;
        this.bodyClass = bodyClass;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getModelYear() {
        return modelYear;
    }

    public void setModelYear(String modelYear) {
        this.modelYear = modelYear;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getBodyClass() {
        return bodyClass;
    }

    public void setBodyClass(String bodyClass) {
        this.bodyClass = bodyClass;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }
}