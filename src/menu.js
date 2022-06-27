import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const [activeTab, setActiveTab] = React.useState("Dashboard");

  return (
    <div id="side-bar">
      <div>
        <Link to="/">
          <p id="dashboard-tab" onClick={() => setActiveTab("Dashboard")}>
            Dashboard
          </p>
        </Link>
      </div>
      <div className="parent-tab">
        <Link to="/patients">
          <p id="patients-tab" onClick={() => setActiveTab("Patients")}>
            Patients
          </p>
        </Link>
        {activeTab === "Patients" ? (
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
        ) : null}
      </div>
      <div className="parent-tab">
        <p id="scheduling-tab" onClick={() => setActiveTab("Scheduling")}>
          Scheduling
        </p>
        {activeTab === "Scheduling" ? (
          <div className="parent-child-tabs">
            <p className="child-tabs">New Appointment</p>
            <p className="child-tabs">Appointment Schedule</p>
          </div>
        ) : null}
      </div>
      <div>
        <p id="medications-tab" onClick={() => setActiveTab("Medications")}>
          Medications
        </p>
        {activeTab === "Medications" ? (
          <div className="parent-child-tabs">
            <p className="child-tabs">Request Medication</p>
            <p className="child-tabs">Medication Requests</p>
          </div>
        ) : null}
      </div>
      <div>
        <p id="labs-tab" onClick={() => setActiveTab("Labs")}>
          Labs
        </p>
        {activeTab === "Labs" ? (
          <div className="parent-child-tabs">
            <p className="child-tabs">Request Lab</p>
            <p className="child-tabs">Lab Requests</p>
          </div>
        ) : null}
      </div>
      <div>
        <p id="imagings-tab" onClick={() => setActiveTab("Imagings")}>
          Imagings
        </p>
        {activeTab === "Imagings" ? (
          <div>
            <p className="child-tabs">New Imaging Request</p>
            <p className="child-tabs">Imaging Requests</p>
          </div>
        ) : null}
      </div>
      <div>
        <p id="incidents-tab" onClick={() => setActiveTab("Incidents")}>
          Incidents
        </p>
        {activeTab === "Incidents" ? (
          <div>
            <p className="child-tabs">Report Incident</p>
            <p className="child-tabs">Reported Incidents</p>
            <p className="child-tabs">Visualize</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
