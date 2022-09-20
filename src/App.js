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

import Medications from "./Medications/medications";
import RequestMedication from "./Medications/request-medication";
import MedicationRequests from "./Medications/Medication-requests";

import Labs from "./Labs/labs";
import RequestLab from "./Labs/Request-lab";
import LabRequests from "./Labs/Lab-requests";

import Imagings from "./Imagings/imagings";
import NewImagingRequests from "./Imagings/New-imaging-request";
import ImagingRequests from "./Imagings/Imaging-requests";

import Incidents from "./Incidents/incidents";
import ReportIncident from "./Incidents/Report-incidents";
import ReportedIncidents from "./Incidents/Reported-incidents";

import { setPatientData } from "./actions";

export default function App() {
  const [selectedPatient, setSelectedPatient] = React.useState();
  // const [patientDetailsPage, setPatientDetailsPage] = React.useState(false);
  // console.log(patientDetailsPage);

  return (
    <div className="App">
      <Header />
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
                  setPatientData={setPatientData}
                  selectedPatient={selectedPatient}
                  // setPatientDetailsPage={setPatientDetailsPage}
                  // patientDetailsPage={patientDetailsPage}
                />
              }
            />
            <Route
              path="/patients/patients-list"
              exact
              element={
                <PatientsList
                  setSelectedPatient={setSelectedPatient}
                  // setPatientDetailsPage={setPatientDetailsPage}
                  // patientDetailsPage={patientDetailsPage}
                />
              }
            />
            <Route
              path="/patients/patient-details"
              exact
              element={<PatientDetails selectedPatient={selectedPatient} />}
            />

            <Route path="/scheduling" exact element={<Scheduling />} />

            <Route path="/medications" exact element={<Medications />} />
            <Route
              path="/medications/request-medication"
              exact
              element={<RequestMedication />}
            />
            <Route
              path="/medications/medication-requests"
              exact
              element={<MedicationRequests />}
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
