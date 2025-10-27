import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './carrito.css';
import { StaticButton } from './StaticButton';

export const Carrito = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="carrito"></div>
            <StaticButton to="/" text="Volver" bottom="2rem" right="2rem" />
            <Footer />
        </>
    )
}