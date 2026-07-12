package com.weather.app.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="favourites")
public class Favourites {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @JoinColumn(name="city_id")
    @OneToOne
    private City city;

    private int userId;
}
