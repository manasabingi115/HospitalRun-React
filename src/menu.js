import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
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

                <NavLink to="/patients/patients-list">
                  <p id="patients-tab-child" className="child-tabs">
                    Patients List
                  </p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>
      <div className="tab">
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
                {/* <p id="schedule-tab-child" className="child-tabs">
                  New Appointment
                </p>
                 */}
                <NavLink to="/scheduling/appointment-schedule">
                  <p id="schedule-tab-child" className="child-tabs">
                    Appointment Schedule
                  </p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>

      <div className="tab">
        <NavLink
          to="/medications"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Medications
        </NavLink>
        <NavLink to="/medications">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/medications/request-medication">
                  <p id="medication-tab-child" className="child-tabs">
                    Request Medication
                  </p>
                </NavLink>

                <NavLink to="/medications/medication-requests">
                  <p id="medication-tab-child" className="child-tabs">
                    Medication Requests
                  </p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>

      <div className="tab">
        <NavLink
          to="/labs"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Labs
        </NavLink>
        <NavLink to="/labs">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/labs/request-lab">
                  <p id="lab-tab-child" className="child-tabs">
                    Request Lab
                  </p>
                </NavLink>

                <NavLink to="/labs/lab-requests">
                  <p id="lab-tab-child" className="child-tabs">
                    Lab Requests
                  </p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>

      <div className="tab">
        <NavLink
          to="/imagings"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Imagings
        </NavLink>
        <NavLink to="/imagings">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/imagings/new-imaging-request">
                  <p id="imaging-tab-child" className="child-tabs">
                    New Imaging Request
                  </p>
                </NavLink>

                <NavLink to="/imagings/imaging-requests">
                  <p id="imaging-tab-child" className="child-tabs">
                    Imaging Requests
                  </p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>

      <div className="tab">
        <NavLink
          to="/incidents"
          className={({ isActive }) =>
            isActive ? "selected-button parent-tab" : "parent-tab"
          }
        >
          Incidents
        </NavLink>
        <NavLink to="/incidents">
          {({ isActive }) =>
            isActive ? (
              <div className="parent-child-tabs">
                <NavLink to="/incidents/report-incident">
                  <p id="incident-tab-child" className="child-tabs">
                    Report Incident
                  </p>
                </NavLink>

                <NavLink to="/incidents/reported-incidents">
                  <p id="incident-tab-child" className="child-tabs">
                    Reported Incidents
                  </p>
                </NavLink>

                {/* <NavLink to="/incidents">
                  <p id="incident-tab-child" className="child-tabs">
                    Visualize
                  </p>
                </NavLink> */}
              </div>
            ) : null
          }
        </NavLink>
      </div>
    </div>
  );
}
