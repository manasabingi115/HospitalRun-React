import React from "react";
import BasicInfo from "./basic-info";
import ContactInfo from "./contact-info";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PatientCode from "./patient-code";

export default function NewPatient({ setPatientDataToStore, handlePopUp }) {
  const initialPatientData = {
    PatientCode: PatientCode(10),
    patientName: "",
    familyName: "",
    suffix: "",
    prefix: "",
    sex: "",
    patientType: "",
    bloodType: "",
    DOB: "",
    approximateAge: "",
    occupation: "",
    preferredLang: "",
    phnNumdata: {
      type: "",
      num: ""
    },
    emaildata: {
      type: "",
      email: ""
    },
    addressdata: {
      type: "",
      address: ""
    }
  };

  const [patientData, setPatientData] = React.useState(initialPatientData);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPatientDataToStore(patientData));
    navigate("/patients/patients-list");
    setPatientData(initialPatientData);
    handlePopUp("created new patient");
  };

  return (
    <div className="main-div">
      <h2>New Patient</h2>
      <form onSubmit={handleSubmit}>
        <BasicInfo setPatientData={setPatientData} patientData={patientData} />
        <ContactInfo
          setPatientData={setPatientData}
          patientData={patientData}
        />
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
