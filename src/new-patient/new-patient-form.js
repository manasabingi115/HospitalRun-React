import React from "react";
import BasicInfo from "./basic-info";
import ContactInfo from "./contact-info";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {setPatientName} from "./src/actions";

export default function NewPatient({ setPatientData }) {
  const [initialPatientData, setInitialPatientData] = React.useState({
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
  });

  const navigate = useNavigate();
  const patientData = useSelector((state) => state.patientData);
  const dispatch = useDispatch();

  // console.log(patientData);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPatientData(initialPatientData));
    navigate("/patients/patients-list");
  };

  return (
    <div className="main-div">
      <h2>New Patient</h2>
      <form onSubmit={handleSubmit}>
        <BasicInfo setInitialPatientData={setInitialPatientData} />
        <ContactInfo setInitialPatientData={setInitialPatientData} />
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
