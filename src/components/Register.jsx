import './register.css';
import React, { useState } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Register = () => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleOnChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3) {
            setError('Name must be at least 3 characters long');
        } else {
            setSuccess('You can register now');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(name);
        if (name.length < 3) {
            setError('Name must be at least 3 characters long');
        } else {
            setSuccess('User registered successfully');
        }
    }
    return (
        <>
        <Header />
        <Navbar />
        <div className="register">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={handleOnChange}/>
                <button type="submit">Register</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            {name && <p className="name">Bienvenido {name} a nuestra aplicación!</p>}
        </div>
        <Footer />
        </>
    )
}
