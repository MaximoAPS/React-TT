import { createContext, useState } from 'react';
export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    
    const agregarAlCarrito = (producto) => {
        if (carrito.find(item => item.id === producto.id)) {
            console.log('Producto ya existe en el carrito');
        } else {
            setCarrito([...carrito, producto]);
            setTotal(total + producto.price);
        }
    }
    const eliminarDelCarrito = (producto, cantidad) => {
        setCarrito(carrito.filter(item => item.id !== producto.id));
        setTotal(total - producto.price * cantidad);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
    }

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, total, setTotal}}>
            {children}
        </CarritoContext.Provider>
    )
}
