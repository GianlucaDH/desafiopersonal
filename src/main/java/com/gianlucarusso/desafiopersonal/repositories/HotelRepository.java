package com.gianlucarusso.desafiopersonal.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gianlucarusso.desafiopersonal.models.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Long> {

}
