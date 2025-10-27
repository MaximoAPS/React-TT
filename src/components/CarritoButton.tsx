import { StaticButton } from './StaticButton';
import React from 'react';

export const CarritoButton = () => {
    return (
        <>
            <div className="carritoButton">
                <StaticButton to="/carrito" text="Carrito" bottom="2rem" right="2rem" />
            </div>
        </>
    )
}