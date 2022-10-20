import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function PatientsList({ setSelectedPatient, setRemoveItem }) {
  const patientDataFromStore = useSelector((state) => state.patientData);

  const { data } = patientDataFromStore;
  console.log(data);

  const dispatch = useDispatch();

  function FindSelectedData(obj) {
    setSelectedPatient(obj);
  }

  function removeSelectedItem(index) {
    dispatch(setRemoveItem(index));
  }

  return (
    <div className="main-div">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Code</th>
            <th>Patient Name</th>
            <th>Family Name</th>
            <th>Sex</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.PatientCode}</td>
              <td>{obj?.patientName}</td>
              <td>{obj?.familyName}</td>
              <td>{obj?.sex}</td>
              <td>{obj?.DOB}</td>

              <td>
                <Link to="/patients/patient-details">
                  <button onClick={() => FindSelectedData(obj, index)}>
                    View
                  </button>
                </Link>
                <button onClick={() => removeSelectedItem(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
