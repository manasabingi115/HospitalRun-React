import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div id="side-bar">
      <div>
        <Link to="/">
          <p id="dashboard-tab">Dashboard</p>
        </Link>
      </div>
      <div className="parent-tab">
        <Link to="/patients">
          <p id="patients-tab">Patients</p>
        </Link>
        <div className="parent-child-tabs">
          <Link to="/patients/new-patient">
            <p id="patients-tab-child" className="child-tabs">
              New Patient
            </p>
          </Link>
          <p id="patients-tab-child" className="child-tabs">
            Patients List
          </p>
        </div>
      </div>
      <div className="parent-tab">
        <p id="scheduling-tab">Scheduling</p>
        <div className="parent-child-tabs">
          <p className="child-tabs">New Appointment</p>
          <p className="child-tabs">Appointment Schedule</p>
        </div>
      </div>
      <div>
        <p id="medications-tab">Medications</p>
        <div className="parent-child-tabs">
          <p className="child-tabs">Request Medication</p>
          <p className="child-tabs">Medication Requests</p>
        </div>
      </div>
      <div>
        <p id="labs-tab">Labs</p>
        <div>
          <p className="child-tabs">Request Lab</p>
          <p className="child-tabs">Lab Requests</p>
        </div>
      </div>
      <div>
        <p id="imagings-tab">Imagings</p>
        <div>
          <p className="child-tabs">New Imaging Request</p>
          <p className="child-tabs">Imaging Requests</p>
        </div>
      </div>
      <div>
        <p id="incidents-tab">Incidents</p>
        <div>
          <p className="child-tabs">Report Incident</p>
          <p className="child-tabs">Reported Incidents</p>
          <p className="child-tabs">Visualize</p>
        </div>
      </div>
    </div>
  );
}
