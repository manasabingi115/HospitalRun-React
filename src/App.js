import "./styles.css";
import Header from "./header";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Patients from "./patients";
import NewPatient from "./newPatient";
import PatientDetails from "./patientDetails";
import Scheduling from "./scheduling";
import Medications from "./medications";

export default function App() {
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
              element={<NewPatient />}
            />
            <Route
              path="/patients/patient-details"
              exact
              element={<PatientDetails />}
            />
            <Route path="/scheduling" exact element={<Scheduling />} />
            <Route path="/medications" exact element={<Medications />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
