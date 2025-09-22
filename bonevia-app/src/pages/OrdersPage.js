// src/pages/OrdersPage.js

import React, { useState, useEffect } from 'react';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch the orders from local storage when the component mounts
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        setOrders(savedOrders);
    }, []);

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>My Orders</h1>
            {orders.length > 0 ? (
                orders.map(order => (
                    <div key={order.id} style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '15px' }}>
                            <p style={{ margin: 0 }}><strong>Order ID:</strong> {order.id}</p>
                            <p style={{ margin: 0 }}><strong>Date:</strong> {order.date}</p>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {order.products.map(product => (
                                <li key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #f4f4f4', paddingBottom: '10px' }}>
                                    <img src={product.image} alt={product.title} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px', marginRight: '15px' }} />
                                    <div>
                                        <h3 style={{ margin: 0 }}>{product.title}</h3>
                                        <p style={{ margin: 0, color: '#666' }}>Quantity: {product.quantity}</p>
                                    </div>
                                    <p style={{ marginLeft: 'auto', fontWeight: 'bold' }}>${(product.price * product.quantity).toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                        <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '10px' }}>
                            Total: ${order.total.toFixed(2)}
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: 'center' }}>You have no past orders. Go to the <a href="/products">Shop</a> to place your first order.</p>
            )}
        </div>
    );
};

export default OrdersPage;