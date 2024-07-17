// services/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      if (found) {
        return current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(current => current.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    setCart(current => {
      const found = current.find(item => item.id === productId);
      if (found) {
        if (quantity <= 0) {
          return current.filter(item => item.id !== productId);
        }
        return current.map(item => item.id === productId ? { ...item, quantity: quantity } : item);
      }
      return current;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateCartQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
