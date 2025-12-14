import React, { useContext, useEffect, useState } from 'react';
import './carrito.css';
import { StaticButton } from './StaticButton.jsx';
import { Product } from './Product.jsx';
import { ProductEnCarrito } from './ProductEnCarrito.jsx';
import { CarritoContext } from '../context/CarritoContext.jsx';
import { round } from 'mathjs';
import { ProductContext } from '../context/ProductContext.jsx';

export const Carrito = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { products, fetchProducts } = useContext(ProductContext);
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <>
            <div className="carrito">
                <h1>Productos</h1>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                <div className="carrito-content">
                    <h1>Carrito</h1>
                    {carrito.map(product => (
                        <ProductEnCarrito key={product.id} product={product} />
                    ))}
                    <div className="carrito-content-total">
                        <h1>Total: {round(total, 2) ? round(total, 2) : '0'} $</h1> 
                        <button onClick={vaciarCarrito}>Vaciar carrito</button>
                    </div>
                </div>
            </div>
            <StaticButton to="/" text="Volver" bottom="2rem" right="2rem" />
        </>
    )
}