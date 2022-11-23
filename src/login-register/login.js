import React from "react";
import { Link } from "react-router-dom";
import "./login-register.css";

export default function LoginPage() {
  const initialState = {
    email: "",
    password: ""
  };
  const [credentials, setCredentials] = React.useState(initialState);

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForm = () => {
    setCredentials(initialState);
  };

  console.log(credentials);

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
