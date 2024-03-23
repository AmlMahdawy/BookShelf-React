import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./Contexts/appContext";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProtectedRoutes from "./Guard/authGuard";
import Home from "./Pages/Home/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>

          {/* protected routes  */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
