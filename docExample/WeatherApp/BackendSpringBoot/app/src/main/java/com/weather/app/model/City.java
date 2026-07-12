package com.weather.app.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="city_info")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name="city")
    private String cityName;

    @Column(name="country")
    private String countryName;

    @Column(name="latitude")
    private double latitude;

    @Column(name = "longitude")
    private double longitude;
}
