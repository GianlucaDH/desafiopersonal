import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',  // Campo para confirmar la contraseña
        email: '',
        role: 'USER'
    });

    const [error, setError] = useState('');  // Estado para almacenar errores

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Verificar que las contraseñas coincidan
        if (user.password !== user.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        // Realizar la solicitud de registro
        axios.post('/api/register', {
            firstName: user.firstName,
            lastName: user.lastName,
            password: user.password,
            email: user.email,
            role: user.role
        })
        .then(response => {
            console.log("Usuario registrado exitosamente");
        })
        .catch(error => {
            console.log("Error al registrar el usuario:", error.response.data);
        });
    };

    return (
        <main className='app'>
            <form onSubmit={handleSubmit} className='registerForm'>
                <h1>Registrarse como nuevo usuario</h1>
                {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Mensaje de error si las contraseñas no coinciden */}
                <input type="text" name="firstName" placeholder="Nombre" onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Apellido" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
                <input type="password" name="confirmPassword" placeholder="Repetir Contraseña" onChange={handleChange} required />
                <button type="submit">Registrar</button>
            </form>
        </main>
    );
};

export default Register;