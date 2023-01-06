import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../menu";

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
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
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
                    <button
                      className="view-button button is-success is-outlined"
                      onClick={() => FindIndex(obj, index)}
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
