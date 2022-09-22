import React from "react";
import BasicInfo from "./basic-info";
import ContactInfo from "./contact-info";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PatientCode from "./patient-code";
import { useSelector } from "react-redux";

export default function NewPatient({
  setPatientDataToStore,
  selectedPatient
  // setPatientDetailsPage,
  // patientDetailsPage
}) {
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

  // const [submitted, setSubmitted] = React.useState(false);
  // console.log(patientData.PatientCode);

  const navigate = useNavigate();
  const patientDataFromStore = useSelector((state) => state.patientData);
  console.log(patientDataFromStore);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // setSubmitted(true);
    dispatch(setPatientDataToStore(patientData));
    // submitted &&
    // navigate("/patients/patients-list");
    console.log("form submitted.");
    setPatientData(initialPatientData);
  };

  return (
    <div className="main-div">
      <h2>New Patient</h2>
      <form onSubmit={handleSubmit}>
        <BasicInfo
          setPatientData={setPatientData}
          selectedPatient={selectedPatient}
          patientData={patientData}
          // submitted={submitted}
          // patientDetailsPage={patientDetailsPage}
        />
        <ContactInfo
          setPatientData={setPatientData}
          selectedPatient={selectedPatient}
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
