import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function MedicationRequests({
  setSelectedMedication,
  setRemoveItem
}) {
  const medicationDataFromStore = useSelector((state) => state.medicationData);

  const { data } = medicationDataFromStore;
  const dispatch = useDispatch();

  console.log(data);

  function FindIndex(obj, e) {
    setSelectedMedication(obj);
  }

  function removeSelectedItem(index) {
    dispatch(setRemoveItem(index));
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
          {data?.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.patient}</td>
              <td>{obj?.medication}</td>
              <td>{obj?.status}</td>
              <td>{obj?.priority}</td>
              <td>
                <Link to="/medications/medication-details">
                  <button onClick={() => FindIndex(obj, index)}>View</button>
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
