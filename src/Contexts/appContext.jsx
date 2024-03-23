import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import api from "../Interceptors/Auth"
const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/book/all")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const getAllBooks = () => {
    return books;
  };



  //Authentication 
  const login= async(userData)=>{
   let res
  await  axios
      .post("http://localhost:3000/auth/login",{data:userData})
      .then((response) => {

        localStorage.setItem("token",response.data.token)
        res=response.data.message

      })
      .catch((error) => {
        res=error.response.data.message});
     return res
  }
  const register= async(userData)=>{
    let res
   await  axios
       .post("http://localhost:3000/auth/register",{data:userData})
       .then((response) => {
        res=response.data.message
 
       })
       .catch((error) => {
         res=error.response.data.message});
      return res
   }



  return (
    <AppContext.Provider
      value={{ getAllBooks ,login,register}}
    >
      {children}
    </AppContext.Provider>
  );
};
