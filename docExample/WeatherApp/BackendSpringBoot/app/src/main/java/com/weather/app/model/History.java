package com.weather.app.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name="history")
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @JoinColumn(name = "city_id")
    @OneToOne
    private City city;

    private Date lastChecked;

    private int userId;
}
