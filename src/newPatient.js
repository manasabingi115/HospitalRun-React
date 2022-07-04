import React from "react";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

export default function NewPatient() {
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
    const [checked, setChecked] = React.useState(false);

    const [patientData, setPatientData] = React.useState({
      patientName: "",
      familyName: "",
      prefix: "",
      suffix: "",
      sex: "",
      patientType: "",
      bloodType: "",
      DOB: "",
      approximateAge: "",
      occupation: "",
      preferredLang: "",
      phoneNums: [],
      emails: [],
      address: []
    });

    function handleChange() {
      setChecked(!checked);
    }

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
              value={patientData.bloodType}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  bloodType: e.target.value
                }));
              }}
            />
          </div>
        </div>
        <div className="NPRow">
          <div className="inputs">
            {checked ? (
              <div>
                <p>Approximate Age</p>
                <input
                  className="input is-primary"
                  placeholder="Approximate Age"
                  type="number"
                  value={patientData.approximateAge}
                  onChange={(e) => {
                    e.preventDefault();
                    setPatientData((prevPatientData) => ({
                      ...prevPatientData,
                      approximateAge: e.target.value,
                      DOB: ""
                    }));
                  }}
                />
              </div>
            ) : (
              <div>
                <p>Date of Birth</p>
                <input
                  className="input is-primary"
                  type="date"
                  value={patientData.DOB}
                  onChange={(e) => {
                    e.preventDefault();
                    setPatientData((prevPatientData) => ({
                      ...prevPatientData,
                      approximateAge: "",
                      DOB: e.target.value
                    }));
                  }}
                />
              </div>
            )}

            <div className="date-input-child">
              <input
                type="checkbox"
                onClick={handleChange}
                defaultChecked={checked}
              />
              <p>Unknown</p>
            </div>
          </div>
          <div className="inputs">
            <p>Occupation</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Occupation"
              value={patientData.occupation}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  occupation: e.target.value
                }));
              }}
            />
          </div>
          <div className="inputs">
            <p>Preferred Language</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Preferred Language"
              value={patientData.preferredLang}
              onChange={(e) => {
                e.preventDefault();
                setPatientData((prevPatientData) => ({
                  ...prevPatientData,
                  preferredLang: e.target.value
                }));
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  function ContactInfo() {
    function PhoneNumForm() {
      const [phnNo, setPhnNo] = React.useState("");

      return (
        <div className="NPRow">
          <div className="inputs">
            <p>Type</p>
            <p>phoneNumberType()</p>
            <SelectOption />
          </div>
          <div className="inputs">
            <p>Phone Number</p>
            <input
              className="input is-primary"
              type="number"
              value={phnNo}
              placeholder="Phone Number"
              onChange={(e) => {
                e.preventDefault();
                setPhnNo(e.target.value);
              }}
              required
            />
          </div>
        </div>
      );
    }

    function EmailForm() {
      const [email, setEmail] = React.useState("");

      return (
        <div className="NPRow">
          <div className="inputs">
            <p>Type</p>
            <p>emailType()</p>
            <SelectOption />
          </div>
          <div className="inputs">
            <p>Email</p>
            <input
              className="input is-primary"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                e.preventDefault();
                setEmail(e.target.value);
              }}
              required
            />
          </div>
        </div>
      );
    }

    function AddressForm() {
      const [address, setAddress] = React.useState("");

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
              placeholder="Address..."
              style={{ resize: "vertical" }}
              value={address}
              onChange={(e) => {
                e.preventDefault();
                setAddress(e.target.value);
              }}
              required
            />
          </div>
        </div>
      );
    }

    return (
      <div className="NPDiv2 NPDiv">
        <p className="NPDiv-p">Contact Information</p>
        <div className="NPDiv2-boxes">
          <div className="NPDiv">
            <p className="NPDiv-p">Phone Number</p>
            <PhoneNumForm />
            <button className="add-button button is-primary is-inverted">
              +Add
            </button>
          </div>
          <div className="NPDiv">
            <p className="NPDiv-p">Email</p>
            <EmailForm />
            <button className="add-button button is-primary is-inverted">
              +Add
            </button>
          </div>
          <div className="NPDiv">
            <p className="NPDiv-p">Address</p>
            <AddressForm />
            <button className="add-button button is-primary is-inverted">
              +Add
            </button>
          </div>
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
