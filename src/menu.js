import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="side-bar">
      <div>
        <p id="dashboard-tab">Dashboard</p>
      </div>
      <div>
        <p id="patients-tab">Patients</p>
        <p id="patients-tab-child">New Patient</p>
        <p id="patients-tab-child">Patients List</p>
      </div>
      <div>
        <p id="scheduling-tab">Scheduling</p>
      </div>
      <div>
        <p id="medications-tab">Medications</p>
      </div>
      <div>
        <p id="labs-tab">Labs</p>
      </div>
      <div>
        <p id="imagings-tab">Imagings</p>
      </div>
      <div>
        <p id="incidents-tab">Incidents</p>
      </div>
    </div>
  );
}
