// src/pages/PaymentPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const PaymentPage = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('creditCard'); // Default payment method

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 5.00; // Fixed shipping cost for example
    const total = subtotal + shipping;

    const handlePayNow = () => {
        // In a real app, payment would be processed here
        // We will simulate it by clearing the cart and moving to the next page
        if (cartItems.length > 0) {
            clearCart();
            navigate('/order-confirmation');
        } else {
            alert('Your cart is empty!');
        }
    };

    return (
        <div className="container payment-page">
            <div className="breadcrumbs">
                <Link to="/cart">Cart</Link>
                <span> / </span>
                <Link to="/checkout">Information</Link>
                <span> / </span>
                <span className="current">Payment</span>
            </div>

            <div className="payment-layout">
                <div className="payment-form-section">
                    <div className="payment-form-box">
                        <h2>Payment</h2>
                        <div className="payment-methods">
                            {/* Payment Options */}
                            <div className="payment-option">
                                <input type="radio" id="creditCard" name="payment" value="creditCard" checked={paymentMethod === 'creditCard'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label htmlFor="creditCard">Credit card</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" id="paypal" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label htmlFor="paypal">PayPal</label>
                            </div>
                            <div className="payment-option">
                                <input type="radio" id="netBanking" name="payment" value="netBanking" checked={paymentMethod === 'netBanking'} onChange={(e) => setPaymentMethod(e.target.value)} />
                                <label htmlFor="netBanking">Net Banking</label>
                            </div>
                        </div>

                        {/* Credit Card Form (conditionally displayed) */}
                        {paymentMethod === 'creditCard' && (
                            <form className="credit-card-form">
                                <div className="input-group">
                                    <input type="text" placeholder="Card number" />
                                </div>
                                <div className="input-group-row">
                                    <div className="input-group">
                                        <input type="text" placeholder="MM/YY" />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" placeholder="CVV" />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Name on card" />
                                </div>
                            </form>
                        )}
                        
                        <h2>Billing address</h2>
                        <div className="billing-address-options">
                            <div className="address-option">
                                <input type="radio" id="sameAddress" name="billing" checked />
                                <label htmlFor="sameAddress">Same as shipping address</label>
                            </div>
                            <div className="address-option">
                                <input type="radio" id="differentAddress" name="billing" />
                                <label htmlFor="differentAddress">Use a different billing address</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="order-summary-section">
                    <div className="summary-wrapper">
                        <h2>Order summary</h2>
                        {cartItems.map(item => (
                            <div key={item.id} className="summary-item">
                                <img src={item.image} alt={item.title} className="summary-item-image" />
                                <div className="summary-item-details">
                                    <p className="summary-item-name">{item.title}</p>
                                    <p className="summary-item-quantity">{item.quantity}</p>
                                </div>
                                <span className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="summary-divider"></div>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>${shipping.toFixed(2)}</span>
                        </div>
                        <div className="summary-divider"></div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button onClick={handlePayNow} className="btn-pay-now">Pay now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentPage;