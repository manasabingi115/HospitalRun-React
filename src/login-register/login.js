import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import "./login-register.css";

export default function LoginPage({ setLoginLogout, setCurrentPage }) {
  const initialState = {
    email: "",
    password: ""
  };
  const [credentials, setCredentials] = React.useState(initialState);
  const registeredData = useSelector((state) => state.RegisteredData);
  console.log(credentials);
  console.log(registeredData.data, "data");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (
      registeredData.data.some((data) => data.password === credentials.password)
    ) {
      setCurrentPage("User");
      navigate("/dashboard");
      setCredentials(initialState);
      setLoginLogout("Log Out");
    } else {
      alert("incorrect username or password");
    }
  };

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
        <button type="submit">Log In</button>
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
