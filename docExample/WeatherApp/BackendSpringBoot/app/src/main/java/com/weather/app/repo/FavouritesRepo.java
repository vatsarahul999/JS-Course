package com.weather.app.repo;

import com.weather.app.model.Favourites;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavouritesRepo extends JpaRepository<Favourites,Integer> {
}
