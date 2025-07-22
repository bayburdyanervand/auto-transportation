package com.auto.backend.service;

import com.auto.backend.dto.VinResponseDTO;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class VinService {
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;

    public VinService(RestTemplate restTemplate, ObjectMapper objectMapper) {
        this.restTemplate = restTemplate;
        this.objectMapper = objectMapper;
    }

    public VinResponseDTO decodeVin(String vin) {
        String apiUrl = "https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/" + vin + "?format=json";
        try {
            String response = restTemplate.getForObject(apiUrl, String.class);
            JsonNode root = objectMapper.readTree(response);
            JsonNode resultNode = root.path("Results").get(0);

            VinResponseDTO result = new VinResponseDTO();
            result.setVin(vin);
            result.setMake(resultNode.path("Make").asText());
            result.setModel(resultNode.path("Model").asText());
            result.setModelYear(resultNode.path("ModelYear").asText());
            result.setManufacturer(resultNode.path("Manufacturer").asText());
            result.setVehicleType(resultNode.path("VehicleType").asText());
            result.setBodyClass(resultNode.path("BodyClass").asText());

            return result;
        } catch (Exception e) {
            VinResponseDTO errorResponse = new VinResponseDTO();
            errorResponse.setErrorMessage("Ошибка API: " + e.getMessage());
            return errorResponse;
        }
    }
}