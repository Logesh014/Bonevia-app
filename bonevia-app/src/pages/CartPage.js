// src/pages/CartPage.js

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useCart(); 

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const buttonStyle = { background: '#eee', border: 'none', padding: '5px 10px', cursor: 'pointer', fontWeight: 'bold' };
  const quantityStyle = { padding: '0 10px', fontSize: '1.1rem' };

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty. <Link to="/products">Go Shopping</Link></p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
              <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '20px', borderRadius: '8px' }} />
              <div style={{ flex: 1 }}>
                <h2>{item.title}</h2>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <button onClick={() => decreaseQuantity(item.id)} style={buttonStyle}>-</button>
                  <span style={quantityStyle}>{item.quantity}</span>
                  <button onClick={() => addToCart(item)} style={buttonStyle}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer', padding: '0', marginTop: '10px' }}>
                  Remove
                </button>
              </div>
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '40px' }}>
            <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
            <p>Shipping is free.</p>
            {/* --- UPDATE THIS BUTTON --- */}
            <Link to="/checkout" style={{textDecoration: 'none'}}>
                <button className="btn btn-primary" style={{ padding: '15px 30px', fontSize: '1rem' }}>
                    Proceed to Checkout
                </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;