import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SystemLayout from "./Layout/SystemLayout";
import ProtectedRoutes from "./Guard/authGuard";
import BookDetails from "./Components/Book-details/BookDetails";
import BookContextProvider from "./context/BookContext";

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
        {
          path: "/books/:id",
          element: <BookDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
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
      bg: {
        main: "#8d27ae",
      },
      text: {
        main: "#414082",
      },
    },
    colors: {
      bg: {
        main: "#8d27ae",
        light: "#f0e3f4",
      },
      text: {
        main: "#8d27ae",
        dark: "#414082",
        light: "#a9a8c7",
        light2: "#7e7da9",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <BookContextProvider>
            <RouterProvider router={router} />
          </BookContextProvider>
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
