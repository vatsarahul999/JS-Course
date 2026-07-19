package com.weather.app.controller;

import com.weather.app.controller.dto.CityUpdateDTO;
import com.weather.app.model.City;
import com.weather.app.service.CityService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("city")
@Slf4j
public class CityController {
    @Autowired
    private CityService cityService;

    @PostMapping("uploadFile")
    public CityUpdateDTO uploadFile(@RequestParam("file") MultipartFile file) {
        boolean succesful = true;

        try {
            cityService.handleUploadFile(file);
        } catch (Throwable t) {
            log.error("There was an error " ,t);
            succesful = false;
        }

        return succesful ? CityUpdateDTO.builder().successfull(succesful).message("The data was uploaded").build() :
                CityUpdateDTO.builder().successfull(succesful).message("there was an error ").build();

    }

@GetMapping()
    public List<City> getAllCities() {
    return cityService.getAllCities();
    }
}
