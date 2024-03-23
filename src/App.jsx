import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>

import "./App.css";
import { AppProvider } from "./Contexts/appContext";
import { BrowserRouter, Route, Router, Routes, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage"
import ProtectedRoutes from "./Guard/authGuard";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>

          {/* protected routes  */}
          <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<HomePage/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
     
 </AppProvider>
  );
}

export default App;
