import "./styles.css";
import Header from "./header";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Patients from "./patients";
import NewPatient from "./new-patient/new-patient-form";
import PatientDetails from "./patient-list-details/patient-details";
import Scheduling from "./scheduling";
import Medications from "./medications";
import Labs from "./labs";
import React from "react";
import Imagings from "./imagings";
import Incidents from "./incidents";
import { setPatientData } from "./actions";
import PatientsList from "./patient-list-details/patients-list";

export default function App() {
  const [selectedPatient, setSelectedPatient] = React.useState();
  const [patientDetailsPage, setPatientDetailsPage] = React.useState(false);
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
                  setPatientDetailsPage={setPatientDetailsPage}
                  patientDetailsPage={patientDetailsPage}
                />
              }
            />
            <Route
              path="/patients/patients-list"
              exact
              element={
                <PatientsList
                  setSelectedPatient={setSelectedPatient}
                  setPatientDetailsPage={setPatientDetailsPage}
                  patientDetailsPage={patientDetailsPage}
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
            <Route path="/labs" exact element={<Labs />} />
            <Route path="/imagings" exact element={<Imagings />} />
            <Route path="/incidents" exact element={<Incidents />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
