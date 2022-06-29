import React from "react";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

export default function NewPatient() {
  const [phoneNumAdd, setPhoneNumAdd] = React.useState(false);

  function PhoneNumForm() {
    return (
      <div className="NPRow">
        <div className="inputs">
          <p>Type</p>
          <p>phoneNumberType()</p>
          <SelectOption />
        </div>
        <div className="inputs">
          <p>Phone Number</p>
          <input className="input is-primary" type="number" required />
        </div>
      </div>
    );
  }

  function EmailForm() {
    return (
      <div className="NPRow">
        <div className="inputs">
          <p>Type</p>
          <p>emailType()</p>
          <SelectOption />
        </div>
        <div className="inputs">
          <p>Email</p>
          <input className="input is-primary" type="text" required />
        </div>
      </div>
    );
  }

  function AddressForm() {
    return (
      <div className="NPRow">
        <div className="inputs">
          <p>Type</p>
          <p>addressType()</p>
          <SelectOption />
        </div>
        <div className="inputs">
          <p>Address</p>
          <textarea
            rows="4"
            className="input is-primary"
            type="text"
            style={{ resize: "vertical" }}
            required
          />
        </div>
      </div>
    );
  }

  function SelectOption() {
    return (
      <div>
        <select className="input is-primary">
          <option>---Choose---</option>
          <option>Home</option>
          <option>Mobile</option>
          <option>Work</option>
          <option>Temperary</option>
          <option>Old</option>
        </select>
      </div>
    );
  }

  function BasicInfo() {
    const [patientData, setPatientData] = React.useState({
      patientName: "",
      familyName: "",
      prefix: "",
      suffix: "",
      sex: "",
      patientType: "",
      bloodType: "",
      DOB: "",
      ocuupation: "",
      preferredLang: "",
      phoneNums: [],
      emails: [],
      address: []
    });
    // const [ex, setEx] = React.useState("");
    console.log(patientData);

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
              value={patientData.prefix}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  prefix: e.target.value
                }));
              }}
            />
          </div>
          <div className="NPRow2-child inputs">
            <div className="red-star-content">
              <p>Given Name</p>
              <FaStarOfLife className="red-star" />
            </div>
            <input
              className="input is-primary"
              type="text"
              placeholder="Given Name"
              value={patientData.patientName}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  patientName: e.target.value
                }));
              }}
              required
            />
          </div>
          <div className="NPRow3-child inputs">
            <p>Family Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Family Name"
              value={patientData.familyName}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  familyName: e.target.value
                }));
              }}
            />
          </div>
          <div className="NPRow1-child inputs">
            <p>Suffix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Suffix"
              value={patientData.suffix}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  suffix: e.target.value
                }));
              }}
            />
          </div>
        </div>
        <div className="NPRow">
          <div className="inputs">
            <p>Sex</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Sex"
              value={patientData.sex}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  sex: e.target.value
                }));
              }}
            />
          </div>
          <div className="inputs">
            <p>Patient Type</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Patient Type"
              value={patientData.patientType}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  patientType: e.target.value
                }));
              }}
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
          <form className="NPDiv">
            <p className="NPDiv-p">Phone Number</p>
            <PhoneNumForm />
            {phoneNumAdd ? <PhoneNumForm /> : null}
            <button
              className="add-button button is-primary is-inverted"
              onClick={() => setPhoneNumAdd(true)}
            >
              +Add
            </button>
          </form>
          <form className="NPDiv">
            <p className="NPDiv-p">Email</p>
            <EmailForm />

            <button className="add-button button is-primary is-inverted">
              +Add
            </button>
          </form>
          <form className="NPDiv">
            <p className="NPDiv-p">Address</p>
            <AddressForm />
            <button className="add-button button is-primary is-inverted">
              +Add
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="main-div">
      <h2>New Patient</h2>
      <form>
        <BasicInfo />
        <ContactInfo />
        <button type="submit" className="button is-black">
          Create Patient
        </button>
        <Link to="/patients">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
