import React from "react";
// import NewPatient from "./newPatient";
import { Link } from "react-router-dom";

export default function Patients() {
  // const [newPatient, setNewPatient] = React.useState(false);

  return (
    <div className="main-div">
      <h2>Patients</h2>
      <input
        className="input is-primary"
        type="text"
        placeholder="Seach"
      ></input>
      <br />
      <Link to="/new-patient">
        <button>New Patient</button>
      </Link>

      {/* {newPatient === false && (
        <button onClick={() => setNewPatient(true)}>New Patient</button>
      )} */}
      {/* <button onClick={() => setNewPatient(false)}>Cancel</button>
      {newPatient && <NewPatient />} */}
    </div>
  );
}
