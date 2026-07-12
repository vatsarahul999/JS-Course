package com.weather.app.controller;

import com.weather.app.dto.APIResponse;
import com.weather.app.service.WeatherDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
("/weather")
@Slf4j
public class WeatherController {

    @Autowired
    private WeatherDetailsService weatherDetailsService;

    @GetMapping()
    public APIResponse getWeatherInformation(@RequestParam double latitude, @RequestParam double longitude){
        return weatherDetailsService.getWeatherDetailsFromOpenMeteo(latitude,longitude);
    }

    @GetMapping()
    public APIResponse getWeatherInformation(@RequestParam String city) {
        return  weatherDetailsService.getWeatherDetails(city);
    }
}
