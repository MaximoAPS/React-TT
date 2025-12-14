import { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    };

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, fetchProducts, addProduct, removeProduct }}>
            {children}
        </ProductContext.Provider>
    );
};