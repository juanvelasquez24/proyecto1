import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.titulo === product.titulo);
      if (existingItem) {
        return prevItems.map(item =>
          item.titulo === product.titulo
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (titulo) => {
    setCartItems(prevItems => prevItems.filter(item => item.titulo !== titulo));
  };

  const updateQuantity = (titulo, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.titulo === titulo ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.precio) * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
