import React, { useState, useEffect } from 'react';
import Header from './components/header'
import Footer from './components/footer'
import axios from 'axios';
import { isMobile } from 'react-device-detect';

const AdminPanel = () => {
  const [hotels, setHotels] = useState([]);

  // Obtener la lista de hoteles al cargar el componente
  useEffect(() => {
    axios.get('/api/hotels')
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error("Hubo un error al obtener la lista de hoteles", error);
      });
  }, []);

  // Eliminar hotel
  const deleteHotel = (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este hotel?')) {
      axios.delete(`/api/hotels/${id}`)
        .then(() => {
          setHotels(hotels.filter(hotel => hotel.id !== id));
          alert('Hotel eliminado correctamente');
        })
        .catch(error => {
          console.error("Hubo un error al eliminar el hotel", error);
        });
    }
  };

  if (isMobile) {
    return (
      <main className='app'>
        <Header />
        <section className="info-page">
        <h1>Prohibido</h1>
        <p>No se permite el acceso desde dispositivos móviles.</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className='app'>
    <Header />
      <section className="admin-panel">
        <h1>Panel de Administración</h1>
        <button onClick={() => window.location.href = "/newHotel"}>Agregar Hotel</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr key={hotel.id}>
                  <td>{hotel.id}</td>
                  <td>
                    {hotel.title}
                  </td>
                  <td>{hotel.category}</td>
                  <td className='priceCell'>${hotel.price}</td>
                  <td>
                  <button className='deleteButton' onClick={() => deleteHotel(hotel.id)}><span class="desafio desafio-trash-o"></span>Eliminar</button>
                  <button onClick={() => window.location = `/hotel?id=${hotel.id}`}><span class="desafio desafio-eye"></span>Ver</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    <Footer />
    </main>
  );
};

export default AdminPanel;