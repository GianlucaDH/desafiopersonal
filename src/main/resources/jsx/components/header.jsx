import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg';
import useAuthStatus from '../../js/useAuthStatus';

export default function Header(){
    const isAuthenticated = useAuthStatus();

    return (
        <header>
            <section className="logo-slogan">
                <Link to="/">
                <img src={logo} alt="Logotipo" />
                </Link>
            </section>
                {
                    !isAuthenticated ? 
                    <section className="actions">
                        <Link className="crear-cuenta" to="/register">Crear cuenta</Link>
                        <a className="iniciar-sesion" href="/login">Iniciar sesión</a>
                    </section> : 
                    <section className="actions">
                    <a className="cerrar-sesion" href="/logout">Cerrar sesión</a>
                    </section>
                }
        </header>
    )
}