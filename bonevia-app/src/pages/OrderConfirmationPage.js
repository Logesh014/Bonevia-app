// src/pages/OrderConfirmationPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '50px 0' }}>
      <h1>Thank You For Your Order!</h1>
      <p>Your order has been successfully placed.</p>
      <p>We've sent a confirmation email with your order details.</p>
      <Link to="/products" className="btn btn-primary" style={{ display: 'inline-block', width: 'auto', marginTop: '20px', textDecoration: 'none' }}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmationPage;