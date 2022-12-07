import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Menu from "../menu";

export default function ImagingDetails({ selectedImaging }) {
  let navigate = useNavigate();

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Imaging Details</h2>
        <form className="patient-basic-info imaging columns">
          <div className="column">
            <label htmlFor="patient">Patient: </label>
            <input
              className="patient-details-input"
              id="patient"
              name="patient"
              defaultValue={
                selectedImaging.patient ? selectedImaging.patient : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="type">Type: </label>
            <input
              className="patient-details-input"
              id="type"
              name="type"
              defaultValue={
                selectedImaging.type ? selectedImaging.type : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="visit">Visit: </label>
            <input
              className="patient-details-input"
              id="visit"
              name="visit"
              value={selectedImaging.visit ? selectedImaging.visit : "- - -"}
              readOnly
            ></input>
            <br />
          </div>

          <div className="column">
            <label htmlFor="status">Status: </label>
            <input
              className="patient-details-input"
              id="status"
              name="status"
              value={selectedImaging.status ? selectedImaging.status : "- - -"}
              readOnly
            ></input>
            <br />
            <label htmlFor="notes">Notes: </label>
            <input
              className="patient-details-input"
              id="notes"
              name="notes"
              value={selectedImaging.notes ? selectedImaging.notes : "- - -"}
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
