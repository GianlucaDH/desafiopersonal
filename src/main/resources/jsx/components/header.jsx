import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';

export default function Header(){
    return (
        <header>
            <section className="logo-slogan">
                <Link to="/">
                <img src={logo} alt="Logotipo" />
                </Link>
            </section>
            <section className="actions">
                <button className="crear-cuenta">Crear cuenta</button>
                <button className="iniciar-sesion">Iniciar sesión</button>
            </section>
        </header>
    )
}