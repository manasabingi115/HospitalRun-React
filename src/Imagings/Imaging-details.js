import React from "react";

export default function ImagingDetails() {
  return (
    <div className="main-div">
      <h2>Imaging Details</h2>
      <form className="patient-basic-info imaging columns">
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
          <label htmlFor="type">Type: </label>
          <input
            className="patient-details-input"
            id="type"
            name="type"
            // defaultValue={
            //   selectedMedication ? selectedMedication.medication : "- - -"
            // }
            readOnly
          ></input>
          <br />
          <label htmlFor="visit">Visit: </label>
          <input
            className="patient-details-input"
            id="visit"
            name="visit"
            // value={selectedMedication ? selectedMedication.status : "- - -"}
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
            // value={selectedMedication ? selectedMedication.status : "- - -"}
            readOnly
          ></input>
          <br />
          <label htmlFor="notes">Notes: </label>
          <input
            className="patient-details-input"
            id="notes"
            name="notes"
            // value={selectedMedication ? selectedMedication.intent : "- - -"}
            readOnly
          ></input>
          <br />
        </div>
      </form>
    </div>
  );
}
