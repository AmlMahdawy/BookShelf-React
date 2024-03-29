import { useEffect, useState } from "react";
import { useApp } from "../Contexts/appContext";
import { useNavigate } from "react-router-dom";
import { CleaningServices } from "@mui/icons-material";
import styles from "../Styles/register.module.css";
const RegisterForm = () => {
  const { register } = useApp();
  const navigate = useNavigate();
  const {loginActive,setLoginActive} = useApp();

  // states
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
    name: false,
  });
  const [singUpClicked, setSignUpClicked] = useState(false);
  const [emailError, setEmailError] = useState("please enter a valid email ");
  const [nameError, setNameError] = useState("Name must be at least 3 letters");
  const [passwordError, setPasswordError] = useState(
    "Password must be 8 char of letters & nums"
  );
  const [serverError, setServerError] = useState(false)

  // regex
  const nameRegex = /^[a-zA-Z\s]{3,15}$/
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // validation conditions
  const emailInvalid = didEdit.email && !emailRegex.test(userData.email);
  const nameInvalid = didEdit.name && !nameRegex.test(userData.name);
  const passwordInvalid =
    didEdit.password && !passwordRegex.test(userData.password);

  // handeling events
  async function handleSignUpClick(event) {
    event.preventDefault();

    let res = await register(userData);
    if (res) {
      setLoginActive(true);
    }else{
    
      setServerError(true)
 

    }
  }
  function handleOnChange(event) {
    setUserData((oldUser) => ({
      ...oldUser,
      [event.target.name]: event.target.value,
    }));
    setDidEdit((oldEdit) => ({
      ...oldEdit,
      [event.target.name]: false,
    }));
  }
  function handleOnBLur(event) {
    setDidEdit((oldEdit) => ({
      ...oldEdit,
      [event.target.name]: true,
    }));
  }
  function handleBookOnClick(event){
    event.preventDefault();
navigate("/home")
  }

  return (
    <>

      <form onSubmit={handleSignUpClick} className={styles.registerForm} autoComplete="off">
        <button style={{all:"unset"}} onClick={handleBookOnClick} title="home">
        <div className={styles.headLine}><span>Book</span><span style={{color:"#8d27ae"}}>Shelf</span></div>

        </button>

        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.labels}>
            Name :
          </label>
          <input
          required
            type="name"
            id="name"
            name="name"
            onChange={handleOnChange}
            onBlur={handleOnBLur}
            value={userData.name}
            className={styles.inputs}
            placeholder="Your full name"
          ></input>
          {nameInvalid ? <div className={styles.error}>{nameError}</div> : null}
          <br></br>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.labels}>
            E-mail :
          </label>
          <input
          required

            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            onBlur={handleOnBLur}
            className={styles.inputs}
            placeholder="Your Email address"
          ></input>
          {emailInvalid ? (
            <div className={styles.error}>{emailError}</div>
          ) : null}
          <br></br>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.labels}>
            Password :
          </label>
          <input
          required

            type="password"
            id="password"
            name="password"
            onChange={handleOnChange}
            onBlur={handleOnBLur}
            value={userData.password}
            className={styles.inputs}
            placeholder="Your password"
          ></input>
          {passwordInvalid ? (
            <div className={styles.error}>{passwordError}</div>
          ) : null}
          <br></br>
        </div>
        {serverError ? (
            <div className={styles.error}>Email already registered </div>
          ) : null}
        <button className={emailInvalid || passwordInvalid || nameInvalid?styles.btnRegisterDisabled:styles.btnRegister} disabled={emailInvalid || passwordInvalid || nameInvalid}>Register</button>
      </form>
     
      <div className={styles.imgContainer}>
        <img src="library.gif" className={styles.imgs}></img>
      </div>
    </>
  );
};
export default RegisterForm;
