import React from 'react';
import './productEnCarrito.css';
import { useState, useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';

export const ProductEnCarrito = ({product}) => {
    const [cantidad, setCantidad] = useState(1);
    const { eliminarDelCarrito, total, setTotal } = useContext(CarritoContext);
    const producto = product;

    const sumarUnidad = () => {
        setCantidad(cantidad + 1);
        setTotal(total + producto.price);
    }
    const restarUnidad = () => {
        setCantidad(cantidad - 1);
        setTotal(total - producto.price);
    }

    return (
        <>
            <div className="productEnCarrito">
                <h1>{product.title}</h1>
                <p>Price: {product.price} $</p>
                <div className="productEnCarrito-cantidad">
                    {cantidad > 1 ? <button onClick={restarUnidad}>-</button> : <button onClick={() => eliminarDelCarrito(product, cantidad)}>Eliminar</button>}
                    <p>Unidades: {cantidad}</p>
                    <button onClick={sumarUnidad}>+</button>
                </div>
                
            </div>
        </>
    )
}