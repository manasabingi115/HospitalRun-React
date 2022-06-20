import "./styles.css";
import Header from "./header";
import Menu from "./menu";
import MainContent from "./mainContent";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard";
import Patients from "./patients";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div id="container">
        <Menu />
        {/* <MainContent /> */}
        <BrowserRouter>
          <div className="App">
            {/* <Link to="/"></Link> */}
            <br />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/patientspage" element={<Patients />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}
