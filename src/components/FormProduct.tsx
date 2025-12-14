import React from 'react'
import './formProduct.css'
import { useState } from 'react'

export const FormProduct = (onAgregar) => {
    const [errores, setErrores] = useState({})
    const [producto, setProducto] = useState({
        nombre: '',
        precio: 0,
        descripcion: '',
    })
    const handleOnChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value })
    }
    const validarFormulario = () => {
        const errores = {}
        if (!producto.nombre) {
            errores.nombre = 'El nombre es requerido'
        }
        if (!producto.precio || producto.precio <= 0) {
            errores.precio = 'El precio debe ser mayor a 0'
        }
        if (!producto.descripcion) {
            errores.descripcion = 'La descripcion es requerida'
        }
        setErrores(errores)
        return Object.keys(errores).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validarFormulario()) {
            return
        }

        const productToAdd = {
            ...producto,
            precio: parseFloat(producto.precio),
        }
        onAgregar(productToAdd)
        setErrores({})
        setProducto({
            nombre: '',
            precio: 0,
            descripcion: '',
        })
    }





    return (
        <div className="formProduct">
            <h1>Formulario de producto</h1>
            <form onSubmit={handleSubmit} className="formProduct-form">
                <input type="text" name="nombre" placeholder="Nombre" value={producto.nombre} onChange={handleOnChange} />
                <input type="number" name="precio" placeholder="Precio" value={producto.precio} onChange={handleOnChange} />
                <input type="text" name="descripcion" placeholder="Descripcion" value={producto.descripcion} onChange={handleOnChange} />
                <button type="submit">Agregar producto</button>
            </form>
            {errores && Object.keys(errores).map((error) => (
                <p className="error" key={error}>{errores[error]}</p>
            ))}
        </div>
    )
}