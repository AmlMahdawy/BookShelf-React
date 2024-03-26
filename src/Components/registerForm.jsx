import { useState } from "react";
import { useApp } from "../Contexts/appContext";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { register } = useApp();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
  });
  async function hanleLoginClick(event) {
    event.preventDefault();
    let res = await register(userData);
    if (res) {
      navigate("/login");
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
      <label htmlFor="name">Name</label>
      <input
        type="name"
        id="name"
        name="name"
        onChange={handleOnChange}
      ></input>
      <br></br>
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
      <button onClick={hanleLoginClick}>Sign Up</button>
    </>
  );
};
export default RegisterForm;
