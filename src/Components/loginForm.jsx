import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';

import { useCallback, useState } from "react";
import { useApp } from "../Contexts/appContext";
import styles from "../Styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { CleaningServices } from '@mui/icons-material';

const LoginForm = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [emailError, setEmailError] = useState("");

  const handleLoginClick = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      setEmailError("Please enter a valid email address.");
      return; 
    } else {
      setEmailError("");
    }
    let res = await login(userData);
   
    if (res) {
      navigate("/home");
    }else{
      setEmailError("Invalid Email or Password");

    }
  };

  const handleOnChange = (event) => {
    setUserData((oldUser) => ({
      ...oldUser,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
        <div className={styles.overLay}></div>

      <div className={styles.mainContainer}>
        <div className={styles.imgContainer}>
        
        </div>

        <form autoComplete="off">
          <div className={styles.logo}>
            <span> Welcome Back</span></div>
          <div className={styles.inputContainer}>
            <label htmlFor="email">E-mail:</label>
        
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email address"
              onChange={handleOnChange}
            />
           
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password:</label>
            
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              onChange={handleOnChange}
            />
          </div>

        
          {emailError && <div className={styles.error}>{emailError}</div>}
            <button onClick={handleLoginClick}>Login</button>

<GoogleLogin
  onSuccess={credentialResponse => {
   console.log( jwtDecode(credentialResponse.credential,"hi"))
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  className={styles.googleBtn}
/>;
      
        </form>
      </div>
    </>
  );
};

export default LoginForm;
