import React from "react";
import { Link } from "react-router-dom";

export default function Scheduling() {
  return (
    <div className="main-div">
      <h2>Schedule</h2>
      <Link to="/scheduling/appointment-schedule">
        <button className="button is-primary is-outlined">
          Request New Imaging
        </button>
      </Link>
    </div>
  );
}
