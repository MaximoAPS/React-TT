import { createContext, useState, useContext } from 'react';

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    const login = (usuario) => {
        const token = `false_token_${usuario}`;
        localStorage.setItem('authToken', token);
        setUsuario(usuario);
    }
    
    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('authToken');
    }
    
    return (
        <AuthContext.Provider value={{ usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext);
