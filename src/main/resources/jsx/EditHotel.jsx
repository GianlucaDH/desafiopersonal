import React, { useState, useEffect } from 'react';
import Footer from "./components/footer"
import Header from "./components/header"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const EditHotel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Función para obtener el ID desde el query string
  const getIdFromQueryString = () => {
      const params = new URLSearchParams(location.search);
      return params.get('id');
  };

  const id = getIdFromQueryString(); // Obtener el ID del query string

  const [hotel, setHotel] = useState({
    title: '',
    description: '',
    locationText: '',
    votes: 0,
    rating: 0,
    imageUrl: '',
    category: '',
    price: 1.01
  });
  const [message, setMessage] = useState('');

  // Obtener los datos del hotel para editarlos
  useEffect(() => {
      if (id) {
          axios.get(`/api/hotels/${id}`)
              .then(response => setHotel(response.data))
              .catch(error => console.error("Error al obtener el hotel:", error));
      }
  }, [id]);

  // Maneja los cambios en el formulario
  const handleChange = (e) => {
      const { name, value } = e.target;
      setHotel({
          ...hotel,
          [name]: value
      });
  };

  // Enviar los datos actualizados
  const handleSubmit = (e) => {
      e.preventDefault();

      axios.put(`/api/hotels/${id}`, hotel)
          .then(response => {
              setMessage('Hotel actualizado correctamente.');
              navigate(`/hotel?id=${id}`); // Redirige a la vista de detalles del hotel
          })
          .catch(error => {
              console.error("Error al actualizar el hotel:", error);
              setMessage(`Error al actualizar el hotel: ${error}`);
          });
  };

  return (
      <div className="edit-hotel">
          <h1>Editar Hotel</h1>
          {message && <p className="message">{message}</p>}
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
                    <label>Descripción:</label>
                    <textarea
                    name="description"
                    onChange={handleChange}
                    required
                    >
                      {hotel.description}
                    </textarea>
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
              <button type="submit">Guardar Cambios</button>
          </form>
      </div>
  );
};

export default EditHotel;