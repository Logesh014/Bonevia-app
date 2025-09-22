// src/pages/OrderConfirmationPage.js

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const OrderConfirmationPage = () => {
    const { setCartItems } = useCart();
    const [lastOrder, setLastOrder] = useState(null);

    useEffect(() => {
        // Fetch the most recent order from local storage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        if (orders.length > 0) {
            setLastOrder(orders[0]); // The most recent order is the first one
        }
        setCartItems([]); // Clear cart to prevent re-saving
    }, [setCartItems]);

    if (!lastOrder) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '40px' }}>
                <h1>Order Successfully Placed!</h1>
                <p>No order details to display. Please place an order first.</p>
                <Link to="/products">Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container order-confirmation-page">
            <h1 className="page-heading">Order Successfully Placed!</h1>
            <p className="subheading">
                Thank you for your purchase! Your order has been successfully placed and is being processed.
                You will receive an email confirmation shortly with your order details.
            </p>

            <div className="order-details-card">
                {/* Order Summary */}
                <h2 className="section-title">Order Summary</h2>
                <div className="summary-info-grid">
                    <div>
                        <p><strong>Order Number</strong></p>
                        <p className="value">#{lastOrder.id}</p>
                    </div>
                    <div>
                        <p><strong>Order Date</strong></p>
                        <p className="value">{lastOrder.date}</p>
                    </div>
                    <div>
                        <p><strong>Total Amount</strong></p>
                        <p className="value">${lastOrder.total.toFixed(2)}</p>
                    </div>
                </div>

                {/* Items Purchased */}
                <h2 className="section-title">Items Purchased</h2>
                <div className="items-table-wrapper">
                    <table className="items-table">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lastOrder.products.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="item-product-info">
                                            <img src={item.image} alt={item.title} className="item-image" />
                                            <span>{item.title}</span>
                                        </div>
                                    </td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Shipping Information */}
                <h2 className="section-title">Shipping Information</h2>
                <div className="shipping-info-grid">
                    <div>
                        <p><strong>Shipping Address</strong></p>
                        <p className="value">
                            {lastOrder.shipping
                                ? `${lastOrder.shipping.name}, ${lastOrder.shipping.street}, ${lastOrder.shipping.city}, ${lastOrder.shipping.zip}`
                                : "Not Provided"}
                        </p>
                    </div>
                    <div>
                        <p><strong>Estimated Delivery</strong></p>
                        <p className="value">November 1, 2025</p>
                    </div>
                    <div>
                        <p><strong>Tracking Number</strong></p>
                        <p className="value">Track Order</p>
                    </div>
                </div>

                {/* Billing Information (if available) */}
                {lastOrder.billing && (
                    <>
                        <h2 className="section-title">Billing Information</h2>
                        <div className="shipping-info-grid">
                            <div>
                                <p><strong>Billing Address</strong></p>
                                <p className="value">
                                    {`${lastOrder.billing.name}, ${lastOrder.billing.street}, ${lastOrder.billing.city}, ${lastOrder.billing.zip}`}
                                </p>
                            </div>
                        </div>
                    </>
                )}

                {/* Customer Support */}
                <div className="customer-support-box">
                    <h2 className="section-title">Customer Support</h2>
                    <p>
                        If you have any questions or need assistance, please contact our customer support team
                        at <a href="mailto:support@bonevia.com">support@bonevia.com</a> or call us at (555) 123-4567.
                    </p>
                </div>
            </div>

            <div className="btn-wrapper">
                <Link to="/orders" className="btn-view-orders">
                    View Order Details
                </Link>
            </div>
        </div>
    );
};

export default OrderConfirmationPage;
