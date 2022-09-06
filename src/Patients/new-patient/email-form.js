import React from "react";
import { useSelector } from "react-redux";
import SelectOption from "./select-option";

export default function EmailForm({ setInitialPatientData }) {
  const patientData = useSelector((state) => state.patientData);
  const { emails } = patientData;

  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>emailType()</p>
        <SelectOption
          setInitialPatientData={setInitialPatientData}
          propName="emaildata"
        />
      </div>
      <div className="inputs">
        <p>Email</p>
        <input
          className="input is-primary"
          type="email"
          placeholder="Email"
          defaultValue={emails}
          onChange={(e) =>
            setInitialPatientData((prevState) => ({
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
