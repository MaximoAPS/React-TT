import { Header } from './Header';
import './login.css';
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';  
import { useNavigate } from 'react-router';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value);
        if (e.target.value.length < 3) {
            setError('Username must be at least 3 characters long');
        } else {
            setError('');
        }
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setError('Password must be at least 8 characters long');
        } else {
            setError('');
        }
    }

    const handleSubmit = (e) => {
        const nameLS = localStorage.getItem('name');
        const passwordLS = localStorage.getItem('password');
        console.log(nameLS, passwordLS);
        e.preventDefault();

        if (nameLS === username && passwordLS === password) {
            setSuccess('Login successful');
            setError('');
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } else {
            setError('Login failed');
            setSuccess('');
        }
    }

    return (
        <>
        <Header />
        <Navbar />
        <div className="login">
            <h1>Fake Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={handleOnChangeUsername}/>
                <input type="password" placeholder="Password" value={password} onChange={handleOnChangePassword}/>
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
        <Footer />
        </>
    )
}