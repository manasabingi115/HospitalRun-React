import "./styles.css";
import React from "react";

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

import Imagings from "./Imagings/imagings";
import NewImagingRequests from "./Imagings/New-imaging-request";
import ImagingRequests from "./Imagings/Imaging-requests";

import Incidents from "./Incidents/incidents";
import ReportIncident from "./Incidents/Report-incidents";
import ReportedIncidents from "./Incidents/Reported-incidents";

import { setPatientDataToStore, setRemoveItem } from "./actions";

import PopUp from "./Pop-up";

export default function App() {
  const [selectedPatient, setSelectedPatient] = React.useState();
  const [selectedMedication, setSelectedMedication] = React.useState();

  const [popUp, setPopUp] = React.useState(false);
  const [popUpContent, setPopUpContent] = React.useState();

  const handlePopUp = (element) => {
    setPopUpContent(element);
    setPopUp(true);
    setTimeout(() => setPopUp(false), 5000);
    console.log("form submitted!");
  };

  return (
    <div className="App">
      <Header />
      <button name="test" onClick={() => handlePopUp("created test")}>
        Test
      </button>
      <PopUp popUp={popUp} setPopUp={setPopUp} popUpContent={popUpContent} />
      <div id="container">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />

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
            <Route path="/labs/request-lab" exact element={<RequestLab />} />
            <Route path="/labs/lab-requests" exact element={<LabRequests />} />

            <Route path="/imagings" exact element={<Imagings />} />
            <Route
              path="/imagings/new-imaging-request"
              exact
              element={<NewImagingRequests />}
            />
            <Route
              path="/imagings/imaging-requests"
              exact
              element={<ImagingRequests />}
            />

            <Route path="/incidents" exact element={<Incidents />} />
            <Route
              path="/incidents/report-incident"
              exact
              element={<ReportIncident />}
            />
            <Route
              path="/incidents/reported-incidents"
              exact
              element={<ReportedIncidents />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
