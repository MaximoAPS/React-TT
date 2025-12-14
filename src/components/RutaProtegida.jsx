import { Navigate } from 'react-router'
import React from 'react'
import { useAuthContext } from '../context/AuthContext.jsx';

export const RutaProtegida = ({ children }) => {
    const { usuario } = useAuthContext();
    if (!usuario) {
        return <Navigate to="/login" />;
    }
    return children;
};