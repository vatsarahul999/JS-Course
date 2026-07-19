package com.weather.app.repo;

import com.weather.app.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CityRepo extends JpaRepository<City,Integer> {

    public List<City> findByCityNameIgnoreCase(String cityName);

}
