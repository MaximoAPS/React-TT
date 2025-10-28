import './main.css';
import React from 'react';
import { CarritoButton } from './CarritoButton';

export const Main = () => {
    const nameLS = localStorage.getItem('name');
    return (
        <main>
            <h1>Main Page</h1>
            {nameLS? <p>Welcome {nameLS}</p> : <p>Please login or register</p>}
            <CarritoButton />
        </main>
    )
}
