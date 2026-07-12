package com.weather.app.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class Current {
    private String time;

    private Integer interval;

    @JsonProperty("temperature_2m")
    private Double temperature2m;

    @JsonProperty("relative_humidity_2m")
    private Integer relativeHumidity2m;

    @JsonProperty("wind_speed_10m")
    private Double windSpeed10m;
}