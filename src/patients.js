import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setData } from "./actions";

export default function Patients() {
  const patientData = useSelector((state) => state.patientData);
  // const dispatch = useDispatch();
  const { data } = patientData;

  console.log(data);

  return (
    <div className="main-div">
      <h2>Patients</h2>
      <input
        className="input is-primary"
        type="text"
        placeholder="Seach"
      ></input>
      <br />
      <Link to="/patients/new-patient">
        <button className="button is-primary is-outlined">New Patient</button>
      </Link>
    </div>
  );
}
