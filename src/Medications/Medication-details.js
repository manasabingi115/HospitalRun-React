import React from "react";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Menu from "../menu";

export default function MedicationDetails({ selectedMedication }) {
  let navigate = useNavigate();

  console.log(selectedMedication);
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
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
                selectedMedication.patient
                  ? selectedMedication.patient
                  : "- - -"
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
                selectedMedication.medication
                  ? selectedMedication.medication
                  : "- - -"
              }
              readOnly
            ></input>
            <br />

            <label htmlFor="status">Status: </label>
            <input
              className="patient-details-input"
              id="status"
              name="status"
              value={
                selectedMedication.status ? selectedMedication.status : "- - -"
              }
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
              value={
                selectedMedication.intent ? selectedMedication.intent : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="priority">Priority: </label>
            <input
              className="patient-details-input"
              id="priority"
              name="priority"
              value={
                selectedMedication.priority
                  ? selectedMedication.priority
                  : "- - -"
              }
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
                  value={
                    selectedMedication.qvalue
                      ? selectedMedication.qvalue
                      : "- - -"
                  }
                  readOnly
                ></input>
              </div>

              <div className="column">
                <label htmlFor="qunit">Quantity Unit: </label>
                <input
                  className="patient-details-input"
                  id="qunit"
                  name="qunit"
                  value={
                    selectedMedication.qunit
                      ? selectedMedication.qunit
                      : "- - -"
                  }
                  readOnly
                ></input>
              </div>
            </div>
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
