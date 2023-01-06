import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function ReportedIncidents({
  setSelectedIncident,
  setRemoveItem
}) {
  const incidentDataFromStore = useSelector((state) => state.incidentData);

  const { data } = incidentDataFromStore;
  const dispatch = useDispatch();

  console.log(data);

  function FindIndex(obj) {
    setSelectedIncident(obj);
  }

  function removeSelectedItem(index) {
    dispatch(setRemoveItem(index));
  }

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Reported Incidents</h2>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Department</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((obj, index) => (
              <tr key={index}>
                <td>{obj?.patient}</td>
                <td>{obj?.department}</td>
                <td>{obj?.Category}</td>
                <td>{obj?.date}</td>
                <td>
                  <Link to="/incidents/incident-details">
                    <button
                      className="view-button button is-success is-outlined"
                      onClick={() => FindIndex(obj)}
                    >
                      View
                    </button>
                  </Link>
                  <button
                    className="button is-danger is-outlined"
                    onClick={() => removeSelectedItem(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
