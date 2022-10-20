import React from "react";
import { FaStarOfLife } from "react-icons/fa";

export default function BasicInfo({ setPatientData, patientData }) {
  const [checked, setChecked] = React.useState(false);

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
            onChange={(e) =>
              setPatientData((prevState) => ({
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
            value={patientData.familyName}
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
