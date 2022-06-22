import React from "react";

export default function NewPatient() {
  function BasicInfo() {
    return (
      <div>
        <p>Basic Information</p>
        <div>
          <div>
            <p>Prefix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Prefix"
            />
          </div>
          <div>
            <p>Given Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Given Name"
            />
          </div>
          <div>
            <p>Family Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Family Name"
            />
          </div>
          <div>
            <p>Suffix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Suffix"
            />
          </div>
        </div>
        <div>
          <div>
            <p>Sex</p>
            <input placeholder="Sex"></input>
          </div>
          <div>
            <p>Patient Type</p>
            <input placeholder="Patient Type"></input>
          </div>
          <div>
            <p>Blood Type</p>
            <input placeholder="Blood Type"></input>
          </div>
        </div>
        <div>
          <div>
            <p>Date of Birth</p>
            <input type="date"></input>
          </div>
          <div>
            <p>Occupation</p>
            <input placeholder="Occupation"></input>
          </div>
          <div>
            <p>Preferred Language</p>
            <input placeholder="Preferred Language"></input>
            <div>
              <input type="checkbox"></input>
              <p>Unknown</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>New Patient</h1>
      <BasicInfo />
    </div>
  );
}
