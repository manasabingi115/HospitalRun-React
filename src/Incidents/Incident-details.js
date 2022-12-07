import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Menu from "../menu";

export default function IncidentDetails({ selectedIncident }) {
  let navigate = useNavigate();

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Incident Details</h2>
        <form className="patient-basic-info incident columns">
          <div className="column">
            <label htmlFor="patient">Patient: </label>
            <input
              className="patient-details-input"
              id="patient"
              name="patient"
              defaultValue={
                selectedIncident.patient ? selectedIncident.patient : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="department">Department: </label>
            <input
              className="patient-details-input"
              id="department"
              name="department"
              defaultValue={
                selectedIncident.department
                  ? selectedIncident.department
                  : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="category">Category: </label>
            <input
              className="patient-details-input"
              id="category"
              name="category"
              value={
                selectedIncident.category ? selectedIncident.category : "- - -"
              }
              readOnly
            ></input>
            <br />
          </div>

          <div className="column">
            <label htmlFor="catItem">Category Item: </label>
            <input
              className="patient-details-input"
              id="catItem"
              name="catItem"
              value={
                selectedIncident.catItem ? selectedIncident.catItem : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="description">Description of Incident: </label>
            <input
              className="patient-details-input"
              id="description"
              name="description"
              value={
                selectedIncident.description
                  ? selectedIncident.description
                  : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="date">Date: </label>
            <input
              className="patient-details-input"
              id="date"
              name="date"
              value={selectedIncident.date ? selectedIncident.date : "- - -"}
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
