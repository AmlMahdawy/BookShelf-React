import { useCallback, useState } from "react";
import { useApp } from "../Contexts/appContext";
import "../Styles/LoginForm.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login } = useApp();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });

  async function hanleLoginClick(event) {
    event.preventDefault();
    let res = await login(userData);
    if (res) {
      navigate("/home");
 
    }
  }
  function handleOnChange(event) {
    setUserData((oldUser) => ({
      ...oldUser,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <form>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleOnChange}
        ></input>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleOnChange}
        ></input>
        <br></br>
        <button onClick={hanleLoginClick}>Login</button>
      </form>
    </>
  );
};

export default LoginForm;
