package com.weather.app.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class CurrentUnits {
    private String time;

    private String interval;

    @JsonProperty("temperature_2m")
    private String temperature2m;

    @JsonProperty("relative_humidity_2m")
    private String relativeHumidity2m;

    @JsonProperty("wind_speed_10m")
    private String windSpeed10m;
}
