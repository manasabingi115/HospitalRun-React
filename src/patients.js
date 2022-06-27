import React from "react";
import { Link } from "react-router-dom";

export default function Patients() {
  return (
    <div className="main-div">
      <h2>Patients</h2>
      <input
        className="input is-primary"
        type="text"
        placeholder="Seach"
      ></input>
      <br />
      <Link to="/patients/new-patient">
        <button>New Patient</button>
      </Link>
    </div>
  );
}
