import React from "react";

export default function IncidentDetails() {
  return (
    <div className="main-div">
      <h2>Incident Details</h2>
      <form className="patient-basic-info incident columns">
        <div className="column">
          <label htmlFor="patient">Patient: </label>
          <input
            className="patient-details-input"
            id="patient"
            name="patient"
            // defaultValue={
            //   selectedMedication ? selectedMedication.patient : "- - -"
            // }
            readOnly
          ></input>
          <br />
          <label htmlFor="department">Department: </label>
          <input
            className="patient-details-input"
            id="department"
            name="department"
            // defaultValue={
            //   selectedMedication ? selectedMedication.medication : "- - -"
            // }
            readOnly
          ></input>
          <br />
          <label htmlFor="category">Category: </label>
          <input
            className="patient-details-input"
            id="category"
            name="category"
            // value={selectedMedication ? selectedMedication.status : "- - -"}
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
            // value={selectedMedication ? selectedMedication.status : "- - -"}
            readOnly
          ></input>
          <br />
          <label htmlFor="description">Description of Incident: </label>
          <input
            className="patient-details-input"
            id="description"
            name="description"
            // value={selectedMedication ? selectedMedication.intent : "- - -"}
            readOnly
          ></input>
          <br />
          <label htmlFor="date">Date: </label>
          <input
            className="patient-details-input"
            id="date"
            name="date"
            // value={selectedMedication ? selectedMedication.intent : "- - -"}
            readOnly
          ></input>
          <br />
        </div>
      </form>
    </div>
  );
}
