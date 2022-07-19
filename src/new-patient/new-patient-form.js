import React from "react";
import BasicInfo from "./basic-info";
import ContactInfo from "./contact-info";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import {setPatientName} from "./src/actions";

export default function NewPatient() {
  const [initialPatientData, setInitialPatientData] = React.useState({
    pname: "",
    fname: "",
    sfx: "",
    pfx: "",
    sx: "",
    ptype: "",
    btype: "",
    dob: "",
    appAge: "",
    occ: "",
    prefLang: "",
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

  console.log(initialPatientData);
  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(setPatientName(e.target.value));
    navigate("/patients/patient-details");
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
