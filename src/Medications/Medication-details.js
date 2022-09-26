import React from "react";

export default function MedicationDetails({ selectedMedication }) {
  console.log(selectedMedication);
  return (
    <div className="main-div">
      <h2>Patient Details</h2>
      <form className="patient-basic-info columns">
        <div className="column">
          <label htmlFor="patient-code">Patient Code: </label>
          <input
            className="patient-details-input"
            id="patient-code"
            name="patient-code"
            // value={selectedMedication?.patient}
            readOnly
          ></input>
          <br />
          <label htmlFor="address">Address: </label>
          <input
            className="patient-details-input"
            id="address"
            name="address"
            // value={address}
            readOnly
          ></input>
          <br />
          <label htmlFor="contact-num">Contact No: </label>
          <input
            className="patient-details-input"
            id="contact-num"
            name="contact-num"
            // value={phoneNums}
            readOnly
          ></input>
        </div>
        <div className="column">
          <label htmlFor="patient-name">Patient Name: </label>
          <input
            className="patient-details-input"
            id="patient-name"
            name="patient-name"
            // defaultValue={selectedMedication?.patientName}
            readOnly
          ></input>
          <br />
          <label htmlFor="reg-date">Registration Date: </label>
          <input
            className="patient-details-input"
            id="reg-date"
            name="reg-date"
            // value={RegistrationDate()}
            readOnly
          ></input>
          <br />
          <div className="patient-details-mini-block columns">
            <div className="column">
              <label htmlFor="gender">Gender: </label>
              <input
                className="patient-details-input"
                id="gender"
                name="gender"
                // value={sex}
                readOnly
              ></input>
            </div>
            <div className="column">
              <label htmlFor="gender">DOB/Age: </label>
              <input
                className="patient-details-input"
                id="gender"
                name="gender"
                // value={DOB ? DOB : approximateAge ? approximateAge : null}
                readOnly
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
