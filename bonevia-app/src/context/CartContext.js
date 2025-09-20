// src/context/CartContext.js

import React, { createContext, useState, useContext } from 'react';

// 1. Create the context (the basket)
const CartContext = createContext();

// A helper hook to easily use the context
export const useCart = () => {
  return useContext(CartContext);
};

// 2. Create the provider component (the one who holds the basket)
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the item is already in the cart
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(item => item.id === product.id);
      if (isItemInCart) {
        // If it is, just increase the quantity (we can add this later)
        console.log(`${product.title} is already in the cart.`);
        return prevItems;
      }
      // If it's not, add it to the cart with a quantity of 1
      console.log(`Added ${product.title} to the cart.`);
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // 3. The value that will be shared with all components
  const value = {
    cartItems,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};