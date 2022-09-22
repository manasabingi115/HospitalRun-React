import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MedicationRequests({ setSelectedPatient }) {
  const medicationDataFromStore = useSelector((state) => state.medicationData);

  const { data } = medicationDataFromStore;

  function FindIndex(obj, e) {
    // setSelectedPatient(obj);
  }

  return (
    <div className="main-div">
      <h2>Medication Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Medication</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.patient}</td>
              <td>{obj?.medication}</td>
              <td>{obj?.status}</td>
              <td>{obj?.priority}</td>
              <td>
                <Link to="/patients/patient-details">
                  <button onClick={() => FindIndex(obj, index)}>View</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
