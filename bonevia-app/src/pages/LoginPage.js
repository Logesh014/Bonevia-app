// src/pages/LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const [loginMethod, setLoginMethod] = useState('email');
    const [formData, setFormData] = useState({ email: '', password: '', mobile: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'mobile') {
            const filteredValue = value.replace(/[^0-9]/g, '').slice(0, 10);
            setFormData(prevData => ({ ...prevData, [name]: filteredValue }));
        } else {
            setFormData(prevData => ({ ...prevData, [name]: value }));
        }
    };

    const handleEmailLogin = (e) => {
        e.preventDefault();

        // Check stored user (mock database with localStorage)
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (!storedUser || storedUser.email !== formData.email || storedUser.password !== formData.password) {
            alert('Invalid email or password!');
            return;
        }

        console.log('Email Login Attempt:', formData);
        alert('Login successful!');
        login();
        navigate('/home'); // go to landing page
    };

    const handleMobileLogin = (e) => {
        e.preventDefault();
        console.log('Mobile Login Attempt with OTP:', formData);
        alert('OTP sent! (Backend required for OTP verification)');
    };

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h2>Welcome back</h2>
                <div className="login-tabs">
                    <button
                        className={`tab-btn ${loginMethod === 'email' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('email')}
                    >
                        Email
                    </button>
                    <button
                        className={`tab-btn ${loginMethod === 'mobile' ? 'active' : ''}`}
                        onClick={() => setLoginMethod('mobile')}
                    >
                        Mobile
                    </button>
                </div>
                {loginMethod === 'email' ? (
                    <form onSubmit={handleEmailLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-options">
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                ) : (
                    <form onSubmit={handleMobileLogin}>
                        <div className="input-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                placeholder="Enter your 10-digit mobile number"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Send OTP</button>
                    </form>
                )}
                <p className="form-footer-text">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
