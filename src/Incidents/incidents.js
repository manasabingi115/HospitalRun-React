import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function Incidents() {
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Incidents</h2>
        <Link to="/incidents/report-incident">
          <button className="button is-primary is-outlined">
            Report Incident
          </button>
        </Link>
      </div>
    </div>
  );
}
