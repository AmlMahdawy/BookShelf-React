import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { AppProvider } from "./Contexts/appContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  // const [count, setCount] = useState(0);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route
                path="/register"
                element={<RegisterPage></RegisterPage>}
              ></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AppProvider>
      </ThemeProvider>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
