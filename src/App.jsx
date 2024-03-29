import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SystemLayout from "./Layout/SystemLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SystemLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage></RegisterPage> },
        { path: "/register", element: <RegisterPage></RegisterPage> },
      ],
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
    spacing: {
      padding: {
        extraSmall: "4px",
        small: "8px",
        medium: "16px",
        large: "24px",
      },
      margin: {
        small: "4px",
        medium: "8px",
        large: "16px",
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
    </>
  );
}

export default App;
