package com.weather.app.service;

import com.weather.app.dto.APIResponse;
import com.weather.app.model.City;
import com.weather.app.model.Weather;
import com.weather.app.repo.CityRepo;
import com.weather.app.repo.WeatherRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Slf4j
@Service
public class WeatherDetailsService {

    public static final String URL = "https://api.open-meteo.com/v1/forecast?latitude=";
    public static final String LONGITUDE = "&longitude=";
    public static final String HOURLY_TEMPERATURE_2_M_PRECIPITATION_UNIT_WIND_SPEED_10_M = "&current=temperature_2m,relative_humidity_2m,wind_speed_10m";
    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    CityRepo cityRepo;

    @Autowired
    WeatherRepo weatherRepo;


    public APIResponse getWeatherDetailsFromOpenMeteo(double latitude, double longitude) {
        StringBuilder sb = new StringBuilder();
        sb.append(URL).append(latitude).append(LONGITUDE)
        .append(longitude).append(HOURLY_TEMPERATURE_2_M_PRECIPITATION_UNIT_WIND_SPEED_10_M);
        //String res = restTemplate.getForObject(sb.toString(), String.class);
        //log.info("The response from the api is {}, for the url : {}", res, sb.toString());
        APIResponse res =  restTemplate.getForObject(sb.toString(), APIResponse.class);
        log.info("The response from the api is {}, for the url : {}", res, sb.toString());
        return res;

    }

    public APIResponse getWeatherDetails(String city) {
        City city2 =  cityRepo.findByCityName(city.toLowerCase());
        Date date = new Date();
        Calendar cal = Calendar.getInstance();
        cal.setTime(date);
        cal.add(Calendar.MINUTE, -10);
        List<Weather> weatherDetails = weatherRepo.findAllByCityWhereLastUpdatedTimeGreaterThan(city2, cal.getTime());
    }
}
