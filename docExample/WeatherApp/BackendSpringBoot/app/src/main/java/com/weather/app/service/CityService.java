package com.weather.app.service;

import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.weather.app.model.City;
import com.weather.app.repo.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Service
public class CityService {

    @Autowired
    private CityRepo cityRepo;
    private final Path rootLocation = Path.of("/Users/rahulvatsa/Dev/Angular/docExample/WeatherApp/BackendSpringBoot/app/files");

    public void handleUploadFile(MultipartFile file) throws Throwable {
        String name = file.getOriginalFilename();
        saveFileToLocation(file);
        Path serverPath = Path.of(this.rootLocation+File.separator+name);
        File sererFile = serverPath.toFile();
        FileReader filereader = new FileReader(sererFile);

        // create csvReader object and skip first Line
        CSVReader csvReader = new CSVReaderBuilder(filereader)
                .withSkipLines(1)
                .build();
        List<String[]> allLines = csvReader.readAll();
        List<City> allObjects = new ArrayList<>();
        for (String[] line: allLines) {
            City city = new City();
            city.setCityName(line[0]);
            city.setCountryName(line[4]);
            city.setLatitude(Double.parseDouble(line[2]));
            city.setLongitude(Double.parseDouble(line[3]));
            allObjects.add(city);
        }

        cityRepo.saveAll(allObjects);

    }

    public List<City> getAllCities() {
        Pageable pageable = PageRequest.of(0, 50);
        Page<City> page = cityRepo.findAll(pageable);
        return  page.getContent();
    }

    private void saveFileToLocation(MultipartFile file) throws Throwable {
        try {
            if (file.isEmpty()) {
                throw new Exception("Failed to store empty file.");
            }
            Path destinationFile = this.rootLocation.resolve(
                            Paths.get(file.getOriginalFilename()))
                    .normalize().toAbsolutePath();
            if (!destinationFile.getParent().equals(this.rootLocation.toAbsolutePath())) {
                // This is a security check
                throw new Exception(
                        "Cannot store file outside current directory.");
            }
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, destinationFile,
                        StandardCopyOption.REPLACE_EXISTING);
            }
        }
        catch ( Exception e) {
            throw new Throwable("Failed to store file.", e);
        }
    }
}

