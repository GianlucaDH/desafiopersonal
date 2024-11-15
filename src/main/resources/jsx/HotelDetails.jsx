import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function HotelDetails() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  console.log("ID del hotel:", id);  // Para verificar si estamos obteniendo el ID

  useEffect(() => {
    if (id) {
      fetch(`/api/hotels/${id}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener los detalles del hotel');
          }
          return response.json();
        })
        .then(data => {
        console.log("Hola")
          setHotel(data);
          setLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setLoading(false);
        });
    }
  }, [id]);

  if (!id) return <p>Parámetro de ID no proporcionado.</p>;
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className='app'>
        <Header />
        <div>
        {hotel ? (
            <div>
            <h1>{hotel.title}</h1>
            <p>Ubicación: {hotel.locationText}</p>
            <p>Descripción: {hotel.description}</p>
            <p>Precio por noche: ${hotel.price}</p>
            </div>
        ) : (
            <p>No se encontró el hotel.</p>
        )}
        </div>
        <Footer />
    </main>
  );
}

export default HotelDetails;