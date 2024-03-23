import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginForm from "./Components/loginForm";
import Home from "./Pages/home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
           
          </Routes>
        </BrowserRouter>
      </AppProvider> */}
       <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
      </BrowserRouter> 
    

    </>
  );
}

export default App;
