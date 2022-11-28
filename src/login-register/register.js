import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setRegisteredData } from "../actions";
import { useDispatch } from "react-redux";

export default function RegisterPage() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cfmPassword: ""
  };
  const [credentials, setCredentials] = React.useState(initialState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (credentials.password === credentials.cfmPassword) {
      setCredentials(initialState);
      navigate("/login");
      dispatch(setRegisteredData(credentials));
    } else {
      alert("incorrect password");
      setCredentials(initialState);
    }
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form className="credentials-block" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={credentials.firstName}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={credentials.lastName}
          onChange={(e) => handleChange(e)}
        ></input>
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
        <input
          type="password"
          placeholder="Confirm Password"
          name="cfmPassword"
          value={credentials.cfmPassword}
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit" style={{ width: "100%" }}>
          Register
        </button>
      </form>
      <p>
        Already have an account?
        <Link to="/login">
          <span> Log In</span>
        </Link>
      </p>
    </div>
  );
}
