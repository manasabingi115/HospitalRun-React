import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function Patients() {
  return (
    <div>
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Patients</h2>
        <input
          className="input is-primary"
          type="text"
          placeholder="Seach"
        ></input>
        <br />
        <Link to="/patients/new-patient">
          <button className="button is-primary is-outlined">New Patient</button>
        </Link>
      </div>
    </div>
  );
}
