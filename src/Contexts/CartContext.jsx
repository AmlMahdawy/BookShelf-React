import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const api_url = "http://localhost:3000";
export const CartContext = createContext();

const axiosInstance = axios.create({
  baseURL: api_url,
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmM2YTgyODgzNWQzZDhhMzg5OGRkMCIsImVtYWlsIjoiYW1sQGdtYWlsLmNvbSIsImlhdCI6MTcxMTA0MTI5Nn0.DHqQYbw9CWv5z-b_g_XjDy2IY2ATyXR5gXZImxoKVeI",
  },
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get("/cart");
      setCartItems(response.data.cart);
      setTotalPrice(response.data.totalPrice);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const addToCart = async (bookId) => {
    try {
      await axiosInstance.post("/cart/add-book", { bookId });
      fetchCart();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const removeFromCart = async (bookId) => {
    try {
      await axiosInstance.delete("/cart/remove-book", { data: { bookId } });
      fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const decrementFromCart = async (bookId) => {
    try {
      await axiosInstance.patch("/cart/decrement-book", { bookId });
      fetchCart();
    } catch (error) {
      console.error("Error decrementing item from cart:", error);
    }
  };

  const checkout = async () => {
    try {
      await axiosInstance.patch("/cart/check-out");
      fetchCart();
    } catch (error) {
      console.error("Error checking out:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        fetchCart,
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        decrementFromCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
