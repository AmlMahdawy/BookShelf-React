import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import Join from "./Pages/Join.jsx";
import SystemLayout from "./Layout/SystemLayout.jsx";
import CartPage from "./Pages/CartPage";
import { CartContext, CartProvider } from "./Contexts/CartContext";
function App() {
  return (
    <>
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/login" element={<Join></Join>}></Route>

              <Route path="/cart" element={<CartPage></CartPage>}></Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AppProvider>
    </>
  );
}

export default App;
