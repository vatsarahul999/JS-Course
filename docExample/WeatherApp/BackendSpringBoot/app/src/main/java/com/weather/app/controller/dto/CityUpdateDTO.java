package com.weather.app.controller.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CityUpdateDTO {
    private boolean successfull;
    private String message;

}
