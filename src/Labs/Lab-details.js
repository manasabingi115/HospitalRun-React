import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Menu from "../menu";

export default function LabDetails({ selectedLab }) {
  let navigate = useNavigate();

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Lab Details</h2>
        <form className="patient-basic-info lab columns">
          <div className="column">
            <label htmlFor="patient">Patient: </label>
            <input
              className="patient-details-input"
              id="patient"
              name="patient"
              defaultValue={selectedLab.patient ? selectedLab.patient : "- - -"}
              readOnly
            ></input>
            <br />
            <label htmlFor="type">Type: </label>
            <input
              className="patient-details-input"
              id="type"
              name="type"
              defaultValue={selectedLab.type ? selectedLab.type : "- - -"}
              readOnly
            ></input>
            <br />
          </div>

          <div className="column">
            <label htmlFor="visit">Visit: </label>
            <input
              className="patient-details-input"
              id="visit"
              name="visit"
              value={selectedLab.visit ? selectedLab.visit : "- - -"}
              readOnly
            ></input>
            <br />
            <label htmlFor="notes">Notes: </label>
            <input
              className="patient-details-input"
              id="notes"
              name="notes"
              value={selectedLab.notes ? selectedLab.notes : "- - -"}
              readOnly
            ></input>
            <br />
          </div>
        </form>
        <div>
          <button onClick={() => navigate(-1)} className="back-button">
            <GoArrowLeft />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
