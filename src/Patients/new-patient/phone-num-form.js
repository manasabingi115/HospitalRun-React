import React from "react";
import SelectOption from "./select-option";

export default function PhoneNumForm({ setPatientData, patientData }) {
  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>phoneNumberType()</p>
        <SelectOption
          setPatientData={setPatientData}
          patientData={patientData}
          propName="phnNumdata"
          value={patientData.phnNumdata.type}
        />
      </div>
      <div className="inputs">
        <p>Phone Number</p>
        <input
          className="input is-primary"
          type="number"
          value={patientData.phnNumdata.num}
          placeholder="Phone Number"
          onChange={(e) =>
            setPatientData((prevState) => ({
              ...prevState,
              phnNumdata: {
                ...prevState.phnNumdata,
                num: e.target.value
              }
            }))
          }
          // required
        />
      </div>
    </div>
  );
}
