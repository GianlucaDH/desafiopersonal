package com.gianlucarusso.desafiopersonal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gianlucarusso.desafiopersonal.models.Hotel;

import java.util.Optional;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    Optional<Hotel> findByTitle(String title);
}
