import React from 'react'
import './product.css'
import { useState, useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext.jsx';

export const Product = ({product}) => {
    const [showDescription, setShowDescription] = useState(false)

    const handleShowDescription = () => {
        setShowDescription(!showDescription)
    }
    const { agregarAlCarrito } = useContext(CarritoContext);
    return (
        <>
            <div className="product">
                <div className="product-header">
                    <h2>{product.title}</h2>
                    <div className="product-price">
                        <p>Price: {product.price} $</p>
                        {!showDescription && <button onClick={handleShowDescription}>Show Description</button>}
                        <button onClick={() => agregarAlCarrito(product)}>Agregar al carrito</button>
                    </div>
                </div>
            {showDescription && (
                <div className="description" style={{ height: 'auto' }}>
                    <p>{product.description}</p>
                    <button onClick={handleShowDescription}>Hide Description</button>
                </div>
                )}
            </div>
        </>
    )
}