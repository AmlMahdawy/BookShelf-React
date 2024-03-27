import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import CartPage from "./Pages/CartPage";
import { CartContext, CartProvider } from "./Contexts/CartContext";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route
                path="/register"
                element={<RegisterPage></RegisterPage>}
              ></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/cart" element={<CartPage></CartPage>}></Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AppProvider>
    </>
  );
}

export default App;
