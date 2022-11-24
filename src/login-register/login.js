import React from "react";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

import "./login-register.css";

export default function LoginPage({ setCurrentPage }) {
  const initialState = {
    email: "",
    password: ""
  };
  const [credentials, setCredentials] = React.useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    setCurrentPage("User");
    navigate("/dashboard");
    setCredentials(initialState);
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
