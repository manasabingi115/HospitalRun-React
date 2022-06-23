import React from "react";
import { Link } from "react-router-dom";

export default function NewPatient() {
  function BasicInfo() {
    return (
      <div className="NPDiv1 NPDiv">
        <p className="NPDiv-p">Basic Information</p>
        <div className="NPRow1 NPRow">
          <div className="NPRow1-child inputs">
            <p>Prefix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Prefix"
            />
          </div>
          <div className="NPRow2-child inputs">
            <p>Given Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Given Name"
              required
            />
          </div>
          <div className="NPRow3-child inputs">
            <p>Family Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Family Name"
            />
          </div>
          <div className="NPRow1-child inputs">
            <p>Suffix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Suffix"
            />
          </div>
        </div>
        <div className="NPRow">
          <div className="inputs">
            <p>Sex</p>
            <input className="input is-primary" type="text" placeholder="Sex" />
          </div>
          <div className="inputs">
            <p>Patient Type</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Patient Type"
            />
          </div>
          <div className="inputs">
            <p>Blood Type</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Blood Type"
            />
          </div>
        </div>
        <div className="NPRow">
          <div className="inputs">
            <p>Date of Birth</p>
            <input className="input is-primary" type="date" />
            <div className="date-input-child">
              <input type="checkbox" />
              <p>Unknown</p>
            </div>
          </div>
          <div className="inputs">
            <p>Occupation</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Occupation"
            />
          </div>
          <div className="inputs">
            <p>Preferred Language</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Preferred Language"
            />
          </div>
        </div>
      </div>
    );
  }

  function ContactInfo() {
    return (
      <div className="NPDiv2 NPDiv">
        <p className="NPDiv-p">Contact Information</p>
        <div className="NPDiv2-boxes">
          <div className="NPDiv">
            <p className="NPDiv-p">Phone Number</p>
            <div className="NPRow">
              <div className="inputs">
                <p>Type</p>
                <p>phoneNumberType()</p>
                <input className="input is-primary" type="text" />
              </div>
              <div className="inputs">
                <p>Phone Number</p>
                <input className="input is-primary" type="text" />
              </div>
            </div>
          </div>
          <div className="NPDiv">
            <p className="NPDiv-p">Email</p>
            <div className="NPRow">
              <div className="inputs">
                <p>Type</p>
                <p>emailType()</p>
                <input className="input is-primary" type="text" />
              </div>
              <div className="inputs">
                <p>Email</p>
                <input className="input is-primary" type="text" />
              </div>
            </div>
          </div>
          <div className="NPDiv">
            <p className="NPDiv-p">Address</p>
            <div className="NPRow">
              <div className="inputs">
                <p>Type</p>
                <p>addressType()</p>
                <input className="input is-primary" type="text" />
              </div>
              <div className="inputs">
                <p>Address</p>
                <textarea
                  rows="4"
                  className="input is-primary"
                  type="text"
                  style={{ resize: "vertical" }}
                />
              </div>
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
      <ContactInfo />
      <Link to="/patients">
        <button>Cancel</button>
      </Link>
    </div>
  );
}
