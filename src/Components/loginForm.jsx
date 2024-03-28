import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useApp } from "../Contexts/appContext";
import styles from "../Styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const { login } = useApp();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
    gmail: true,
  });

  const [emailError, setEmailError] = useState("");

  const handleLoginClick = async (event) => {
    if (event) {
      event.preventDefault();
    }
    let res = await login(userData);
    if (res) {
      navigate("/home");
    } else {
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
      <div className={styles.container}>
        <div className={styles.overLay}></div>

        <div className={styles.mainContainer}>

          <div className={styles.imgContainer}></div>

          <form autoComplete="off" className={styles.loginForm}>

            <div className={styles.welcomeMsg}>
              <span> Welcome Back</span>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="email" className={styles.Labels}>
                E-mail:
              </label>
              <input
                className={styles.inputs}
                type="email"
                id="email"
                name="email"
                placeholder="Your Email address"
                onChange={handleOnChange}
              />
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="password" className={styles.Labels}>
                Password:
              </label>
              <input
                className={styles.inputs}
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                onChange={handleOnChange}
              />
            </div>

            {emailError && <div className={styles.error}>{emailError}</div>}

            <button onClick={handleLoginClick} className={styles.btnLogin}>
              Login
            </button>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                let mail = await jwtDecode(credentialResponse.credential).email;
                setUserData((oldUser) => ({
                  ...oldUser,
                  gmail: true,
                  email: mail,
                }));
                handleLoginClick();
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            ;
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
