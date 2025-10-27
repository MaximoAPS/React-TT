import { Header } from './Header';
import './login.css';
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setUsername(username);
        setPassword(password);
    }

    return (
        <>
        <Header />
        <Navbar />
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
        <Footer />
        </>
    )
}