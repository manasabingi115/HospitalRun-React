import React from "react";

export default function MedicationDetails({ selectedMedication }) {
  console.log(selectedMedication);
  return (
    <div className="main-div">
      <h2>Medication Details</h2>
      <form className="patient-basic-info medication columns">
        <div className="column">
          <label htmlFor="patient-name">Patient Name: </label>
          <input
            className="patient-details-input"
            id="patient-name"
            name="patient-name"
            defaultValue={
              selectedMedication ? selectedMedication.patient : "- - -"
            }
            readOnly
          ></input>
          <br />

          <label htmlFor="medication">Medication: </label>
          <input
            className="patient-details-input"
            id="medication"
            name="medication"
            defaultValue={
              selectedMedication ? selectedMedication.medication : "- - -"
            }
            readOnly
          ></input>
          <br />

          <label htmlFor="status">Status: </label>
          <input
            className="patient-details-input"
            id="status"
            name="status"
            value={selectedMedication ? selectedMedication.status : "- - -"}
            readOnly
          ></input>
          <br />
        </div>

        <div className="column">
          <label htmlFor="intent">Intent: </label>
          <input
            className="patient-details-input"
            id="intent"
            name="intent"
            value={selectedMedication ? selectedMedication.intent : "- - -"}
            readOnly
          ></input>
          <br />
          <label htmlFor="priority">Priority: </label>
          <input
            className="patient-details-input"
            id="priority"
            name="priority"
            value={selectedMedication ? selectedMedication.priority : "- - -"}
            readOnly
          ></input>
          <br />
          <div className="patient-details-mini-block columns">
            <div className="column">
              <label htmlFor="qvalue">Quantity Value: </label>
              <input
                className="patient-details-input"
                id="qvalue"
                name="qvalue"
                value={selectedMedication ? selectedMedication.qvalue : "- - -"}
                readOnly
              ></input>
            </div>

            <div className="column">
              <label htmlFor="qunit">Quantity Unit: </label>
              <input
                className="patient-details-input"
                id="qunit"
                name="qunit"
                value={selectedMedication ? selectedMedication.qunit : "- - -"}
                readOnly
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
