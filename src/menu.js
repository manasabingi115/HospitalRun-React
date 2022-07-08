import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Menu() {
  const [activeTab, setActiveTab] = React.useState();

  return (
    <div id="side-bar">
      <div className="tab">
        <NavLink
          to="/"
          id="dashboard-tab"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          <div className="inner-div">Dashboard</div>
        </NavLink>
      </div>
      <div className="tab">
        <NavLink
          to="/patients"
          id="patients-tab"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          <div className="inner-div">Patients</div>
        </NavLink>
        <NavLink to="/patients">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/patients/new-patient">
                  <p id="patients-tab-child" className="child-tabs">
                    New Patient
                  </p>
                </NavLink>
                <p id="patients-tab-child" className="child-tabs">
                  Patients List
                </p>
              </div>
            ) : null
          }
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/scheduling"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Scheduling
        </NavLink>
        <NavLink to="/scheduling">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/scheduling/new-appointment">
                  <p id="patients-tab-child" className="child-tabs">
                    New Appointment
                  </p>
                </NavLink>
                <p id="patients-tab-child" className="child-tabs">
                  Appointment Schedule
                </p>
              </div>
            ) : null
          }
        </NavLink>
      </div>

      {/* <div>
        <NavLink
          to="/scheduling"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Scheduling
        </NavLink>
        <NavLink to="/scheduling">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/scheduling/new-appointment">
                  <p id="patients-tab-child" className="child-tabs">
                    New Appointment
                  </p>
                </NavLink>
                <p id="patients-tab-child" className="child-tabs">
                  Appointment Schedule
                </p>
              </div>
            ) : null
          }
        </NavLink>
      </div> */}

      <div>
        <p
          id="medications-tab"
          onClick={() => setActiveTab("Medications")}
          className={`parent-tab ${
            activeTab === "Medications" ? "selected-button" : ""
          }`}
        >
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
        <p
          id="labs-tab"
          onClick={() => setActiveTab("Labs")}
          className={`parent-tab ${
            activeTab === "Labs" ? "selected-button" : ""
          }`}
        >
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
        <p
          id="imagings-tab"
          onClick={() => setActiveTab("Imagings")}
          className={`parent-tab ${
            activeTab === "Imagings" ? "selected-button" : ""
          }`}
        >
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
        <p
          id="incidents-tab"
          onClick={() => setActiveTab("Incidents")}
          className={`parent-tab ${
            activeTab === "Incidents" ? "selected-button" : ""
          }`}
        >
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
