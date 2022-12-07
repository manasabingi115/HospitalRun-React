import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function Scheduling() {
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Schedule</h2>
        <Link to="/scheduling/appointment-schedule">
          <button className="button is-primary is-outlined">
            Request New Imaging
          </button>
        </Link>
      </div>
    </div>
  );
}
