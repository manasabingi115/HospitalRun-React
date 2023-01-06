import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function ImagingRequests({ setSelectedImaging, setRemoveItem }) {
  const imagingDataFromStore = useSelector((state) => state.imagingData);

  const { data } = imagingDataFromStore;
  const dispatch = useDispatch();

  console.log(data);

  function FindIndex(obj) {
    setSelectedImaging(obj);
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
        <h2>Imaging Requests</h2>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Type</th>
              <th>Visit</th>
              <th>Status</th>
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
                  <Link to="/imagings/imaging-details">
                    <button
                      onClick={() => FindIndex(obj, index)}
                      className="view-button button is-success is-outlined"
                    >
                      View
                    </button>
                  </Link>
                  <button
                    onClick={() => removeSelectedItem(index)}
                    className="button is-danger is-outlined"
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
