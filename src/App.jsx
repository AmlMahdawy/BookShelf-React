import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import AllBooksPage from "./Pages/allBooks";
import BookContextProvider from "./context/BookContext";
import ProfilePage from "./Pages/profile";
import Join from "./Pages/Join.jsx";
import SystemLayout from "./Layout/SystemLayout.jsx";
import CartPage from "./Pages/CartPage";
import { CartContext, CartProvider } from "./Contexts/CartContext";
import AdminPage from "./Pages/adminPage.jsx";
function App() {
  return (
    <>
      <AppProvider>
      <CartProvider>
      <BookContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/login" element={<Join></Join>}></Route>
              <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/allBooks" element={<AllBooksPage></AllBooksPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="/admin" element={<AdminPage/>}></Route>
          </Routes>
        </BrowserRouter>
        </BookContextProvider>
        </CartProvider>
      </AppProvider>
    </>
  );
}

export default App;
