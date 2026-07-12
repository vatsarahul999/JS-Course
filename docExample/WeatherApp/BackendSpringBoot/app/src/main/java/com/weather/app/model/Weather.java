package com.weather.app.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name="weather_details")

public class Weather {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name="city_id")
    @OneToOne
    private City city;

    private String apiResponse;

    private Date lastUpdatedTime;


}
