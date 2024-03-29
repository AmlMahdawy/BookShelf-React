import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Join from "./Pages/Join";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/login" element={<Join></Join>}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}

export default App;
