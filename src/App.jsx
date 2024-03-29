import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Pages/Home";
import { AppProvider } from "./Contexts/appContext";
import AllBooksPage from "./Pages/allBooks";
import BookContextProvider from "./context/BookContext";
import ProfilePage from "./Pages/profile";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
      <BookContextProvider>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/register"
              element={<RegisterPage></RegisterPage>}
            ></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/allBooks" element={<AllBooksPage></AllBooksPage>}></Route>
            <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
          </Routes>
        </BrowserRouter>
        </BookContextProvider>
      </AppProvider>

      {/* <Home></Home> */}
    </>
  );
}

export default App;
