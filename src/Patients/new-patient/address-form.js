import React from "react";
import SelectOption from "./select-option";

export default function AddressForm({ setPatientData, patientData }) {
  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>addressType()</p>
        <SelectOption
          setPatientData={setPatientData}
          patientData={patientData}
          propName="addressdata"
          value={patientData.addressdata.type}
        />
      </div>
      <div className="inputs">
        <p>Address</p>
        <textarea
          rows="4"
          className="input is-primary"
          type="text"
          placeholder="Address..."
          style={{ resize: "vertical" }}
          value={patientData.addressdata.address}
          onChange={(e) =>
            setPatientData((prevState) => ({
              ...prevState,
              addressdata: {
                ...prevState.addressdata,
                address: e.target.value
              }
            }))
          }
          // required
        />
      </div>
    </div>
  );
}
