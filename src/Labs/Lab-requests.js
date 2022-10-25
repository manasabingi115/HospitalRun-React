import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function LabRequests({ setSelectedLab, setRemoveItem }) {
  const labDataFromStore = useSelector((state) => state.labData);

  const { data } = labDataFromStore;
  const dispatch = useDispatch();

  console.log(data);

  function FindIndex(obj, e) {
    setSelectedLab(obj);
  }

  function removeSelectedItem(index) {
    dispatch(setRemoveItem(index));
  }

  return (
    <div className="main-div">
      <h2>Lab Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Type</th>
            <th>Visit</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((obj, index) => (
            <tr key={index}>
              <td>{obj?.patient}</td>
              <td>{obj?.type}</td>
              <td>{obj?.visit}</td>
              <td>
                <Link to="/labs/lab-details">
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
