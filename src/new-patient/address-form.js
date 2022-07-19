import React from "react";
import { useSelector } from "react-redux";
import SelectOption from "./select-option";

export default function AddressForm({ setInitialPatientData }) {
  const patientData = useSelector((state) => state.patientData);
  const { address } = patientData;

  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>addressType()</p>
        <SelectOption
          setInitialPatientData={setInitialPatientData}
          propName="addressdata"
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
          defaultValue={address}
          // onChange={HandleAddress}
          required
        />
      </div>
    </div>
  );
}
