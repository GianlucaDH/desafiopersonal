import React, { useState, useEffect } from 'react';
import Footer from "./components/footer"
import Header from "./components/header"
import axios from 'axios';

const NewHotel = () => {
    const [hotel, setHotel] = useState({
      title: 'rg',
      locationText: '',
      votes: 0,
      rating: 0,
      imageUrl: '',
      category: 's',
      price: 1.01
    });
  
    const [message, setMessage] = useState('');
  
    // Maneja el cambio en los campos de texto
    const handleChange = (e) => {
      setHotel({
        ...hotel,
        [e.target.name]: e.target.value
      });
    };
  
    // Maneja el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Envía los datos al backend (Spring Boot)
      console.log(hotel);
      axios.post('/api/hotels', hotel)
        .then(response => {
          setMessage('Hotel agregado correctamente.');
          // Limpia el formulario
          setHotel({
            title: 'rg',
            locationText: '',
            votes: 0,
            rating: 0,
            imageUrl: '',
            category: 's',
            price: 1.01
          });
        })
        .catch(error => {
          console.error("Hubo un error al agregar el hotel:", error);
          setMessage(`Error al agregar el hotel, ${error}.`);
        });
    };
  
    return (
    <main className='app'>
        <Header />
            <section className='new-hotel'>
                <h1>Agregar Hotel</h1>
                {message && <p class="message">{message}</p>}
                <form onSubmit={handleSubmit}>
                <p>
                    <label>Nombre del Hotel:</label>
                    <input
                    type="text"
                    name="title"
                    value={hotel.title}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label>Ubicación:</label>
                    <input
                    type="text"
                    name="locationText"
                    value={hotel.locationText}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label>URL de la Imagen:</label>
                    <input
                    type="text"
                    name="imageUrl"
                    value={hotel.imageUrl}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label>Categoria:</label>
                    <select name="category" value={hotel.category} onChange={handleChange} required>
                        <option value="1">Hoteles</option>
                        <option value="2">Hostels</option>
                        <option value="3">Departamentos</option>
                        <option value="4">Bed and breakfast</option>
                    </select>
                </p>
                <p>
                    <label>Precio:</label>
                    <input
                    type="number"
                    name="price"
                    value={hotel.price}
                    onChange={handleChange}
                    required
                    />
                </p>
                <button type="submit">Agregar Hotel</button>
                </form>
            </section>
        <Footer />
    </main>
    );
};

export default NewHotel;