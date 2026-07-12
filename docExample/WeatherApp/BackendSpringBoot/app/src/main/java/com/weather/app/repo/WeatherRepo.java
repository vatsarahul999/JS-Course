package com.weather.app.repo;

import com.weather.app.model.City;
import com.weather.app.model.Weather;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface WeatherRepo extends JpaRepository<Weather,Integer> {

    List<Weather> findAllByCityWhereLastUpdatedTimeGreaterThan(City city, Date time);
}
