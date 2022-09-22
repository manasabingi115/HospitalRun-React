import React from "react";
import { useSelector } from "react-redux";
import SelectOption from "./select-option";

export default function EmailForm({ setPatientData, patientData }) {
  const patientDataFromStore = useSelector((state) => state.patientData);
  const { emails } = patientDataFromStore;
  // console.log(patientDataFromStore);

  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>emailType()</p>
        <SelectOption
          setPatientData={setPatientData}
          patientData={patientData}
          propName="emaildata"
          value={patientData.emaildata.type}
        />
      </div>
      <div className="inputs">
        <p>Email</p>
        <input
          className="input is-primary"
          type="email"
          placeholder="Email"
          value={patientData.emaildata.email}
          onChange={(e) =>
            setPatientData((prevState) => ({
              ...prevState,
              emaildata: {
                ...prevState.emaildata,
                email: e.target.value
              }
            }))
          }
          // required
        />
      </div>
    </div>
  );
}
