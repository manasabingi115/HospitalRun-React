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
                <NavLink
                  to="/patients/new-patient"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">New Patient</p>
                </NavLink>

                <NavLink
                  to="/patients/patients-list"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Patients List</p>
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
                <NavLink
                  to="/scheduling/appointment-schedule"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Appointment Schedule</p>
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
                <NavLink
                  to="/medications/request-medication"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Request Medication</p>
                </NavLink>

                <NavLink
                  to="/medications/medication-requests"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Medication Requests</p>
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
                <NavLink
                  to="/labs/request-lab"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Request Lab</p>
                </NavLink>

                <NavLink
                  to="/labs/lab-requests"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Lab Requests</p>
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
                <NavLink
                  to="/imagings/new-imaging-request"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">New Imaging Request</p>
                </NavLink>

                <NavLink
                  to="/imagings/imaging-requests"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Imaging Requests</p>
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
                <NavLink
                  to="/incidents/report-incident"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Report Incident</p>
                </NavLink>

                <NavLink
                  to="/incidents/reported-incidents"
                  className={({ isActive }) =>
                    isActive ? "child-tab-active" : "child-tabs"
                  }
                >
                  <p id="all-tab-child">Reported Incidents</p>
                </NavLink>
              </div>
            ) : null
          }
        </NavLink>
      </div>
    </div>
  );
}
