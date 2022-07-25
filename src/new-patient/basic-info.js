import React from "react";
import { useSelector } from "react-redux";
// import SelectOption from "./select-option";
import { FaStarOfLife } from "react-icons/fa";
// import selectedPatient from "../patient-list-details/patients-list";

export default function BasicInfo({
  setInitialPatientData,
  selectedPatient,
  patientDetailsPage
}) {
  const patientData = useSelector((state) => state.patientData);
  const [checked, setChecked] = React.useState(false);
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

  function handleChange() {
    setChecked(!checked);
  }

  // console.log(selectedPatient);

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
            defaultValue={prefix}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            // defaultValue={
            //   selectedPatient ? selectedPatient.patientName : patientName
            // }
            defaultValue={patientName}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
                ...prevState,
                patientName: e.target.value
              }))
            }
            required
          />
        </div>
        <div className="NPRow3-child inputs">
          <p>Family Name</p>
          <input
            className="input is-primary"
            type="text"
            placeholder="Family Name"
            // defaultValue={
            //   selectedPatient ? selectedPatient.familyName : familyName
            // }
            defaultValue={familyName}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            defaultValue={suffix}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            defaultValue={sex}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            defaultValue={patientType}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            defaultValue={bloodType}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
                defaultValue={approximateAge}
                onChange={(e) =>
                  setInitialPatientData((prevState) => ({
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
                defaultValue={DOB}
                onChange={(e) =>
                  setInitialPatientData((prevState) => ({
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
            // defaultValue={
            //   selectedPatient ? selectedPatient.occupation : occupation
            // }
            defaultValue={occupation}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
            defaultValue={preferredLang}
            onChange={(e) =>
              setInitialPatientData((prevState) => ({
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
