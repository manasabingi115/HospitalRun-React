import React from "react";
import { useSelector } from "react-redux";
// import SelectOption from "./select-option";
import { FaStarOfLife } from "react-icons/fa";
// import selectedPatient from "../patient-list-details/patients-list";

export default function BasicInfo({
  setPatientData,
  patientData,
  // submitted,
  selectedPatient,
  patientDetailsPage
}) {
  const patientDataFromStore = useSelector((state) => state.patientData);
  const [checked, setChecked] = React.useState(false);
  // const {
  //   patientName,
  //   familyName,
  //   prefix,
  //   suffix,
  //   sex,
  //   patientType,
  //   bloodType,
  //   DOB,
  //   approximateAge,
  //   occupation,
  //   preferredLang
  // } = patientDataFromStore;

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
            // defaultValue={selectedPatient ? selectedPatient.prefix : prefix}
            value={patientData.prefix}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                prefix: e.target.value
              }))
            }
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
            // defaultValue={
            //   selectedPatient ? selectedPatient.patientName : patientName
            // }
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                patientName: e.target.value
              }))
            }
            required
          />
          {/* {submitted && !patientData.patientName ? (
            <p style={{ color: "red", marginTop: "-10x" }}>
              please enter name.
            </p>
          ) : null} */}
        </div>
        <div className="NPRow3-child inputs">
          <p>Family Name</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Family Name"
            value={patientData.familyName}
            // defaultValue={
            //   selectedPatient ? selectedPatient.familyName : familyName
            // }
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                familyName: e.target.value
              }))
            }
          />
        </div>
        <div className="NPRow1-child inputs">
          <p>Suffix</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Suffix"
            // defaultValue={selectedPatient ? selectedPatient.suffix : suffix}
            value={patientData.suffix}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                suffix: e.target.value
              }))
            }
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
            // defaultValue={selectedPatient ? selectedPatient.sex : sex}
            value={patientData.sex}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                sex: e.target.value
              }))
            }
          />
        </div>
        <div className="inputs">
          <p>Patient Type</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Patient Type"
            // defaultValue={
            //   selectedPatient ? selectedPatient.patientType : patientType
            // }
            value={patientData.patientType}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                patientType: e.target.value
              }))
            }
          />
        </div>
        <div className="inputs">
          <p>Blood Type</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Blood Type"
            // defaultValue={
            //   selectedPatient ? selectedPatient.bloodType : bloodType
            // }
            value={patientData.bloodType}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                bloodType: e.target.value
              }))
            }
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
                // defaultValue={
                //   selectedPatient
                //     ? selectedPatient.approximateAge
                //     : approximateAge
                // }
                value={patientData.approximateAge}
                onChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    DOB: "",
                    approximateAge: e.target.value
                  }))
                }
              />
            </div>
          ) : (
            <div>
              <p>Date of Birth</p>
              <input
                className="input is-primary"
                type="date"
                // defaultValue={selectedPatient ? selectedPatient.DOB : DOB}
                value={patientData.DOB}
                onChange={(e) =>
                  setPatientData((prevState) => ({
                    ...prevState,
                    approximateAge: "",
                    DOB: e.target.value
                  }))
                }
              />
            </div>
          )}

          <div className="date-input-child">
            <input
              type="checkbox"
              onClick={handleChange}
              value={patientData.checked}
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
            // defaultValue={
            //   selectedPatient ? selectedPatient.occupation : occupation
            // }
            value={patientData.occupation}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                occupation: e.target.value
              }))
            }
          />
        </div>
        <div className="inputs">
          <p>Preferred Language</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Preferred Language"
            // defaultValue={
            //   selectedPatient ? selectedPatient.preferredLang : preferredLang
            // }
            value={patientData.preferredLang}
            onChange={(e) =>
              setPatientData((prevState) => ({
                ...prevState,
                preferredLang: e.target.value
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}
