import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SystemLayout from "./Layout/SystemLayout";
import ProtectedRoutes from "./Guard/authGuard";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Join from "./Pages/Join";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SystemLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: (
            <ProtectedRoutes>
              {" "}
              <Home />{" "}
            </ProtectedRoutes>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: <join />,
    },
  ]);
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
    palette: {
      book: {
        main: "#8d27ae",
      },
      button: {
        main: "#8d27ae",
        hover: "#8d27ae",
        active: "#651c7d",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </ThemeProvider>
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
