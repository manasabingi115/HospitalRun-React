import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function Medications() {
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Medications</h2>
        <Link to="/medications/request-medication">
          <button className="button is-primary is-outlined">
            Request Medication
          </button>
        </Link>
      </div>
    </div>
  );
}
