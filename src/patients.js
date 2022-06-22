import React from "react";
import NewPatient from "./newPatient";

export default function Patients() {
  const [newPatient, setNewPatient] = React.useState(false);
  console.log(newPatient);

  return (
    <div className="main-div">
      <h2>Patients</h2>
      <input placeholder="Seach"></input>
      <br />
      {newPatient === false && (
        <button onClick={() => setNewPatient(true)}>New Patient</button>
      )}
      <button onClick={() => setNewPatient(false)}>Cancel</button>
      {newPatient && <NewPatient />}
    </div>
  );
}
