package com.gianlucarusso.desafiopersonal.controllers;

import com.gianlucarusso.desafiopersonal.models.Hotel;
import com.gianlucarusso.desafiopersonal.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {

    private static final String IMAGE_DIRECTORY = "uploads/";

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hotel> getMovieById(@PathVariable Long id) {
        Optional<Hotel> movie = hotelRepository.findById(id);
        return movie.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @CrossOrigin
    @PostMapping
    public ResponseEntity<String> createHotel(@RequestBody Hotel hotel) {
        Optional<Hotel> existingHotel = hotelRepository.findByTitle(hotel.getTitle());

        if (existingHotel.isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("El hotel con ese nombre ya existe.");
        }

        Hotel savedHotel = hotelRepository.save(hotel);
        return ResponseEntity.status(HttpStatus.CREATED).body("Hotel creado exitosamente");
    }

    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel updatedHotel){
        if(!hotelRepository.existsById(id)){
            return ResponseEntity.notFound().build();
        }

        updatedHotel.setId(id);
        Hotel savedHotel = hotelRepository.save(updatedHotel);
        return ResponseEntity.ok(savedHotel);
    }

    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id){
        if(!hotelRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        hotelRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getRandom")
    public List<Hotel> getRandomHotels() {
        List<Hotel> hotels = hotelRepository.findAll();
        Collections.shuffle(hotels);
        return hotels.stream().limit(10).toList();
    }

    @GetMapping("/admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String admin()
    {
        return "Admin";
    }
}
