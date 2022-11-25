import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { setRegisteredData } from "../actions";
// import { useDispatch } from "react-redux";

import "./login-register.css";

export default function LoginPage({ setLoginLogout, setCurrentPage }) {
  const initialState = {
    email: "",
    password: ""
  };
  const [credentials, setCredentials] = React.useState(initialState);

  // const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    // dispatch(setRegisteredData(credentials));
    setCurrentPage("User");
    navigate("/dashboard");
    setCredentials(initialState);
    setLoginLogout("Log Out");
  };

  // console.log(credentials);

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form className="credentials-block" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Email address"
          name="email"
          value={credentials.email}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={(e) => handleChange(e)}
        ></input>
        {/* <Link to="/"> */}
        <button type="submit">Log In</button>
        {/* </Link> */}
      </form>
      <p>
        Don't have an account?
        <Link to="/register">
          <span> Register Now</span>
        </Link>
      </p>
    </div>
  );
}
