import React from "react";
import { Link } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setPatientName,
  setFamilyName,
  setPrefix,
  setSuffix,
  setSex,
  setPatientType,
  setBloodType,
  setDOB,
  setApproximateAge,
  setOccupation,
  setPreferredLang,
  setPhoneNum,
  setEmail,
  setAddress
} from "./actions";

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
    const patientData = useSelector((state) => state.patientData);
    const dispatch = useDispatch();
    const [checked, setChecked] = React.useState(false);

    const HandlePatientName = (e) => {
      dispatch(setPatientName(e.target.value));
    };
    const HandleFamilyName = (e) => {
      dispatch(setFamilyName(e.target.value));
    };
    const HandlePrefix = (e) => {
      dispatch(setPrefix(e.target.value));
    };
    const HandleSuffix = (e) => {
      dispatch(setSuffix(e.target.value));
    };
    const HandleSex = (e) => {
      dispatch(setSex(e.target.value));
    };
    const HandlePatientType = (e) => {
      dispatch(setPatientType(e.target.value));
    };
    const HandleBloodType = (e) => {
      dispatch(setBloodType(e.target.value));
    };
    const HandleDOB = (e) => {
      dispatch(setApproximateAge(""));
      dispatch(setDOB(e.target.value));
    };
    const HandleApproximateAge = (e) => {
      dispatch(setDOB(""));
      dispatch(setApproximateAge(e.target.value));
    };
    const HandleOccupation = (e) => {
      dispatch(setOccupation(e.target.value));
    };
    const HandlePreferredLang = (e) => {
      dispatch(setPreferredLang(e.target.value));
    };

    const {
      patientName,
      familyName,
      prefix,
      suffix,
      sex,
      patientType,
      bloodType,
      DOB,
      approximateAge,
      occupation,
      preferredLang
    } = patientData;
    console.log(patientData);

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
              value={prefix}
              onChange={HandlePrefix}
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
              value={patientName}
              onChange={HandlePatientName}
              required
            />
          </div>
          <div className="NPRow3-child inputs">
            <p>Family Name</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Family Name"
              value={familyName}
              onChange={HandleFamilyName}
            />
          </div>
          <div className="NPRow1-child inputs">
            <p>Suffix</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Suffix"
              value={suffix}
              onChange={HandleSuffix}
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
              value={sex}
              onChange={HandleSex}
            />
          </div>
          <div className="inputs">
            <p>Patient Type</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Patient Type"
              value={patientType}
              onChange={HandlePatientType}
            />
          </div>
          <div className="inputs">
            <p>Blood Type</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Blood Type"
              value={bloodType}
              onChange={HandleBloodType}
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
                  value={approximateAge}
                  onChange={HandleApproximateAge}
                />
              </div>
            ) : (
              <div>
                <p>Date of Birth</p>
                <input
                  className="input is-primary"
                  type="date"
                  value={DOB}
                  onChange={HandleDOB}
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
              value={occupation}
              onChange={HandleOccupation}
            />
          </div>
          <div className="inputs">
            <p>Preferred Language</p>
            <input
              className="input is-primary"
              type="text"
              placeholder="Preferred Language"
              value={preferredLang}
              onChange={HandlePreferredLang}
            />
          </div>
        </div>
      </div>
    );
  }

  function ContactInfo() {
    function PhoneNumForm() {
      const patientData = useSelector((state) => state.patientData);
      const dispatch = useDispatch();
      const { phoneNums } = patientData;

      const HandlePhoneNum = (e) => {
        dispatch(setPhoneNum(e.target.value));
      };

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
              value={phoneNums}
              placeholder="Phone Number"
              onChange={HandlePhoneNum}
              required
            />
          </div>
        </div>
      );
    }

    function EmailForm() {
      const patientData = useSelector((state) => state.patientData);
      const dispatch = useDispatch();
      const { emails } = patientData;

      const HandleEmail = (e) => {
        dispatch(setEmail(e.target.value));
      };

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
              value={emails}
              onChange={HandleEmail}
              required
            />
          </div>
        </div>
      );
    }

    function AddressForm() {
      const patientData = useSelector((state) => state.patientData);
      const dispatch = useDispatch();
      const { address } = patientData;

      const HandleAddress = (e) => {
        dispatch(setAddress(e.target.value));
      };

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
              onChange={HandleAddress}
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

  function HandleSubmit() {}

  return (
    <div className="main-div">
      <h2>New Patient</h2>
      <form>
        <BasicInfo />
        <ContactInfo />
        {/* <Link to="/patients"> */}
        <button type="submit" className="button is-black">
          Create Patient
        </button>
        {/* </Link> */}
        {/* <button type="submit" className="button is-black">
          Create Patient
        </button> */}
        <Link to="/patients">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
