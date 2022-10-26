import React from "react";
import { Link } from "react-router-dom";

export default function Incidents() {
  return (
    <div className="main-div">
      <h2>Incidents</h2>
      <Link to="/incidents/report-incident">
        <button className="button is-primary is-outlined">
          Report Incident
        </button>
      </Link>
    </div>
  );
}
