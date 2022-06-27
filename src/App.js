import "./styles.css";
import Header from "./header";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Patients from "./patients";
import NewPatient from "./newPatient";

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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
