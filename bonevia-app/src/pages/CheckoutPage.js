// src/pages/CheckoutPage.js
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
  });

  const [billingOption, setBillingOption] = useState("same"); // radio toggle
  const [billingAddress, setBillingAddress] = useState({
    name: '',
    street: '',
    city: '',
    zip: '',
  });

  const handleInputChange = (e, setFn) => {
    const { name, value } = e.target;
    setFn(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items to place an order.");
      return;
    }

    const finalBillingAddress =
      billingOption === "same" ? shippingAddress : billingAddress;

    // Save order
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      products: cartItems,
      shipping: shippingAddress,
      billing: finalBillingAddress,
      total: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setCartItems([]); // clear cart
    navigate('/order-confirmation');
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container" style={{ padding: '40px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Checkout</h1>

      {/* Order Summary */}
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '30px' }}>
        <h2>Order Summary</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cartItems.map(item => (
            <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0' }}>
              <span>{item.title} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div style={{ fontWeight: 'bold', borderTop: '1px solid #eee', marginTop: '10px', paddingTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
        <h2>Shipping Details</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>Full Name</label>
          <input type="text" name="name" value={shippingAddress.name} onChange={(e) => handleInputChange(e, setShippingAddress)} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Street Address</label>
          <input type="text" name="street" value={shippingAddress.street} onChange={(e) => handleInputChange(e, setShippingAddress)} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>City</label>
          <input type="text" name="city" value={shippingAddress.city} onChange={(e) => handleInputChange(e, setShippingAddress)} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Zip Code</label>
          <input type="text" name="zip" value={shippingAddress.zip} onChange={(e) => handleInputChange(e, setShippingAddress)} required />
        </div>

        {/* Billing Section */}
        <h2>Billing Address</h2>
        <div style={{ marginBottom: '15px' }}>
          <label>
            <input
              type="radio"
              name="billingOption"
              value="same"
              checked={billingOption === "same"}
              onChange={(e) => setBillingOption(e.target.value)}
            />
            Same as shipping address
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="billingOption"
              value="different"
              checked={billingOption === "different"}
              onChange={(e) => setBillingOption(e.target.value)}
            />
            Use a different billing address
          </label>
        </div>

        {billingOption === "different" && (
          <div>
            <div style={{ marginBottom: '15px' }}>
              <label>Full Name</label>
              <input type="text" name="name" value={billingAddress.name} onChange={(e) => handleInputChange(e, setBillingAddress)} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Street Address</label>
              <input type="text" name="street" value={billingAddress.street} onChange={(e) => handleInputChange(e, setBillingAddress)} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>City</label>
              <input type="text" name="city" value={billingAddress.city} onChange={(e) => handleInputChange(e, setBillingAddress)} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>Zip Code</label>
              <input type="text" name="zip" value={billingAddress.zip} onChange={(e) => handleInputChange(e, setBillingAddress)} required />
            </div>
          </div>
        )}

        <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Confirm & Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
