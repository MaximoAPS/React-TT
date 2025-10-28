import './register.css';
import React, { useState } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Register = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleOnChangeName = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3) {
            setError('Name must be at least 3 characters long');
        } else {
            setSuccess('Name is valid');
            setError('');
        }
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setError('Password must be at least 8 characters long');
        } else {
            setSuccess('Password is valid');
            setError('');
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setName(name);
        setPassword(password);
        if (name.length < 3) {
            setError('Name must be at least 3 characters long');
        } else {
            localStorage.setItem('name', name);
            localStorage.setItem('password', password);
            setSuccess('User registered successfully');
            setError('');
        }
    }
    return (
        <>
        <Header />
        <Navbar />
        <div className="register">
            <h1>Fake Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={handleOnChangeName}/>
                <input type="password" placeholder="Password" value={password} onChange={handleOnChangePassword}/>
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
