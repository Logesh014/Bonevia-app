// src/pages/CartPage.js

import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
    const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useCart();
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 0; // Assuming free shipping for this example
    const total = subtotal + shipping;

    return (
        <div className="container cart-page">
            <h1 className="page-heading">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Your cart is empty. <Link to="/products">Go Shopping</Link></p>
            ) : (
                <div className="cart-content">
                    {/* Cart Table */}
                    <div className="cart-items-section">
                        <div className="cart-table-wrapper">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th> {/* Empty header for the remove button */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id} className="cart-item-row">
                                            <td>
                                                <div className="cart-product-info">
                                                    <img src={item.image} alt={item.title} className="cart-product-image" />
                                                    <span>{item.title}</span>
                                                </div>
                                            </td>
                                            <td>₹{item.price.toFixed(2)}</td>
                                            <td>
                                                <div className="quantity-controls">
                                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                    <span>{item.quantity}</span>
                                                    <button onClick={() => addToCart(item)}>+</button>
                                                </div>
                                            </td>
                                            <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                                                    <FaTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Order Summary and Checkout */}
                    <div className="cart-summary-section">
                        <div className="order-summary-box">
                            <h2>Order Summary</h2>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row total-row">
                                <span>Total</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                            <Link to="/checkout" className="checkout-link">
                                <button className="btn btn-primary">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;