// src/pages/PaymentPage.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handlePayNow = () => {
    // In a real app, payment would be processed here
    // We will simulate it by clearing the cart and moving to the next page
    clearCart();
    navigate('/order-confirmation');
  };

  return (
    <div className="form-container">
      <div className="form-wrapper" style={{maxWidth: '500px'}}>
        <h2>Payment Details</h2>
        <p>Please enter your payment information to complete the purchase.</p>

        <div className="input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />
        </div>
        <div style={{display: 'flex', gap: '20px'}}>
          <div className="input-group" style={{flex: 1}}>
            <label htmlFor="expiry">Expiry Date (MM/YY)</label>
            <input type="text" id="expiry" placeholder="MM/YY" />
          </div>
          <div className="input-group" style={{flex: 1}}>
            <label htmlFor="cvv">Security Code</label>
            <input type="text" id="cvv" placeholder="CVV" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="cardName">Name on Card</label>
          <input type="text" id="cardName" placeholder="Enter name on card" />
        </div>
        
        {/* --- THIS BUTTON IS NOW FUNCTIONAL --- */}
        <button onClick={handlePayNow} className="btn btn-primary" style={{width: '100%'}}>
          Pay Now (${subtotal.toFixed(2)})
        </button>

        <p style={{textAlign: 'center', marginTop: '20px'}}>
            <Link to="/cart">Return to Cart</Link>
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;