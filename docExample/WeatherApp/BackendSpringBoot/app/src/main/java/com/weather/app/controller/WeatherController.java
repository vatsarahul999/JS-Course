package com.weather.app.controller;

import com.weather.app.dto.APIResponse;
import com.weather.app.model.City;
import com.weather.app.service.WeatherDetailsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/weather")
@Slf4j
public class WeatherController {

    @Autowired
    private WeatherDetailsService weatherDetailsService;

    @GetMapping("apiCall")
    public APIResponse getWeatherInformation(@RequestParam double latitude, @RequestParam double longitude){
        return weatherDetailsService.getWeatherDetailsFromOpenMeteo(latitude,longitude);
    }

    @GetMapping("city")
    public Map<City,APIResponse> getWeatherInformation(@RequestParam String city) throws Throwable {
        return  weatherDetailsService.getWeatherDetails(city);
    }
}
