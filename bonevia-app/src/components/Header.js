// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // 1. Import the useCart hook to connect to the basket

const Header = () => {
  const { cartItems } = useCart(); // 2. Get the list of items from the basket

  // 3. Calculate the total number of items
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">Bonevia</Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        {/* 4. Display the cart link and the total item count */}
        <div className="nav-actions" style={{display: 'flex', alignItems: 'center'}}>
          <Link to="/cart" style={{marginRight: '20px', textDecoration: 'none', color: '#333'}}>
             🛒 Cart ({totalItems})
          </Link>
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-link">Sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;