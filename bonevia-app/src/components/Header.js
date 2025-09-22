// src/components/Header.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { BsBag } from 'react-icons/bs';
import ProfileDropdown from './ProfileDropdown';
import AuthDropdown from './AuthDropdown';

const user = {
    name: "John Doe",
    email: "john.doe@example.com",
};

const Header = () => {
    // The isLoggedIn and logout variables are now used
    const { isLoggedIn, logout } = useAuth();
    const { cartItems } = useCart();
    const { setSearchTerm } = useSearch();
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        if (isSearchVisible) {
            setInput('');
            setSearchTerm('');
        }
    };

    const toggleProfileDropdown = () => {
        setIsProfileDropdownVisible(!isProfileDropdownVisible);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(input);
        setIsSearchVisible(false);
        navigate('/');
    };

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo">Bonevia</Link>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/products">Shop</Link></li>
                        <li><Link to="/about">Our Story</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="nav-actions">
                    <CiSearch className="icon" onClick={toggleSearch} />
                    <div className="cart-icon-container">
                        <Link to="/cart">
                            <BsBag className="icon cart-icon" />
                            {totalItems > 0 && <span className="cart-item-count">{totalItems}</span>}
                        </Link>
                    </div>
                    <div className="profile-container">
                        <FaUserCircle className="icon profile-icon" onClick={toggleProfileDropdown} />
                        {isProfileDropdownVisible && (isLoggedIn ? <ProfileDropdown user={user} onLogout={logout} /> : <AuthDropdown />)}
                    </div>
                </div>
            </div>
            {isSearchVisible && (
                <div className="search-bar-container">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="search-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </form>
                </div>
            )}
        </header>
    );
};

export default Header;