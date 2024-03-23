import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
