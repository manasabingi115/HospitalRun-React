import "./styles.css";
import React from "react";

import LoginPage from "./login-register/login";
import RegisterPage from "./login-register/register";

import Header from "./header";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

import Patients from "./Patients/patients";
import NewPatient from "./Patients/new-patient/new-patient-form";
import PatientDetails from "./Patients/patient-list-details/patient-details";
import PatientsList from "./Patients/patient-list-details/patients-list";

import Scheduling from "./Scheduling/scheduling";
import AppointmentSchedule from "./Scheduling/Appointment-schedule";

import Medications from "./Medications/medications";
import RequestMedication from "./Medications/request-medication";
import MedicationRequests from "./Medications/Medication-requests";
import MedicationDetails from "./Medications/Medication-details";

import Labs from "./Labs/labs";
import RequestLab from "./Labs/Request-lab";
import LabRequests from "./Labs/Lab-requests";
import LabDetails from "./Labs/Lab-details";

import Imagings from "./Imagings/imagings";
import NewImagingRequests from "./Imagings/New-imaging-request";
import ImagingRequests from "./Imagings/Imaging-requests";
import ImagingDetails from "./Imagings/Imaging-details";

import Incidents from "./Incidents/incidents";
import ReportIncident from "./Incidents/Report-incidents";
import ReportedIncidents from "./Incidents/Reported-incidents";
import IncidentDetails from "./Incidents/Incident-details";

import { setPatientDataToStore, setRemoveItem } from "./actions";

import PopUp from "./Pop-up";

export default function App() {
  const [currentPage, setCurrentPage] = React.useState("Login");
  // console.log(currentPage, "page");
  const [loginLogout, setLoginLogout] = React.useState("Log In");

  const [selectedPatient, setSelectedPatient] = React.useState();
  const [selectedMedication, setSelectedMedication] = React.useState();
  const [selectedLab, setSelectedLab] = React.useState();
  const [selectedImaging, setSelectedImaging] = React.useState();
  const [selectedIncident, setSelectedIncident] = React.useState();

  const [popUp, setPopUp] = React.useState(false);
  const [popUpContent, setPopUpContent] = React.useState();

  const handlePopUp = (element) => {
    setPopUpContent(element);
    setPopUp(true);
    setTimeout(() => setPopUp(false), 5000);
    console.log("form submitted!");
  };
  // browserslist.clearCaches();
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header
          loginLogout={loginLogout}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setLoginLogout={setLoginLogout}
        /> */}
        <PopUp popUp={popUp} setPopUp={setPopUp} popUpContent={popUpContent} />
        {/* <button name="test" onClick={() => handlePopUp("created test")}>
          Test
        </button> */}

        {/* {currentPage === "User" && <Menu />} */}

        <Routes>
          <Route
            path="/login"
            exact
            element={
              <LoginPage
                setCurrentPage={setCurrentPage}
                setLoginLogout={setLoginLogout}
              />
            }
          />
          <Route
            path="/register"
            exact
            element={<RegisterPage setCurrentPage={setCurrentPage} />}
          />
          <Route path="/dashboard" exact element={<Dashboard />} />

          <Route path="/patients" exact element={<Patients />} />
          <Route
            path="/patients/new-patient"
            exact
            element={
              <NewPatient
                setPatientDataToStore={setPatientDataToStore}
                selectedPatient={selectedPatient}
                handlePopUp={handlePopUp}
              />
            }
          />
          <Route
            path="/patients/patients-list"
            exact
            element={
              <PatientsList
                setSelectedPatient={setSelectedPatient}
                setRemoveItem={setRemoveItem}
              />
            }
          />
          <Route
            path="/patients/patient-details"
            exact
            element={<PatientDetails selectedPatient={selectedPatient} />}
          />

          <Route path="/scheduling" exact element={<Scheduling />} />
          <Route
            path="/scheduling/appointment-schedule"
            exact
            element={<AppointmentSchedule />}
          />

          <Route path="/medications" exact element={<Medications />} />
          <Route
            path="/medications/request-medication"
            exact
            element={<RequestMedication handlePopUp={handlePopUp} />}
          />
          <Route
            path="/medications/medication-requests"
            exact
            element={
              <MedicationRequests
                setSelectedMedication={setSelectedMedication}
                setRemoveItem={setRemoveItem}
              />
            }
          />
          <Route
            path="/medications/medication-details"
            exact
            element={
              <MedicationDetails selectedMedication={selectedMedication} />
            }
          />

          <Route path="/labs" exact element={<Labs />} />
          <Route
            path="/labs/request-lab"
            exact
            element={<RequestLab handlePopUp={handlePopUp} />}
          />
          <Route
            path="/labs/lab-requests"
            exact
            element={
              <LabRequests
                setSelectedLab={setSelectedLab}
                setRemoveItem={setRemoveItem}
              />
            }
          />
          <Route
            path="/labs/lab-details"
            exact
            element={<LabDetails selectedLab={selectedLab} />}
          />

          <Route path="/imagings" exact element={<Imagings />} />
          <Route
            path="/imagings/new-imaging-request"
            exact
            element={<NewImagingRequests handlePopUp={handlePopUp} />}
          />
          <Route
            path="/imagings/imaging-requests"
            exact
            element={
              <ImagingRequests
                setSelectedImaging={setSelectedImaging}
                setRemoveItem={setRemoveItem}
              />
            }
          />
          <Route
            path="/imagings/imaging-details"
            exact
            element={<ImagingDetails selectedImaging={selectedImaging} />}
          />

          <Route path="/incidents" exact element={<Incidents />} />
          <Route
            path="/incidents/report-incident"
            exact
            element={<ReportIncident handlePopUp={handlePopUp} />}
          />
          <Route
            path="/incidents/reported-incidents"
            exact
            element={
              <ReportedIncidents
                setSelectedIncident={setSelectedIncident}
                setRemoveItem={setRemoveItem}
              />
            }
          />
          <Route
            path="/incidents/incident-details"
            exact
            element={<IncidentDetails selectedIncident={selectedIncident} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
    // </div>
  );
}
