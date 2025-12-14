import './main.css';
import React from 'react';
import { CarritoButton } from './CarritoButton';
import { useAuthContext } from '../context/AuthContext';

export const Main = () => {
    const { usuario } = useAuthContext();
    return (
        <main>
            <h1>Main Page</h1>
            {usuario ? <p>Welcome {usuario}</p> : <p>Please login or register</p>}
            <CarritoButton />
        </main>
    )
}
