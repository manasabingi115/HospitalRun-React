import React from "react";
import { useSelector } from "react-redux";
import SelectOption from "./select-option";

export default function AddressForm({ setPatientData }) {
  const patientDataFromStore = useSelector((state) => state.patientData);
  const { address } = patientDataFromStore;

  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>addressType()</p>
        <SelectOption setPatientData={setPatientData} propName="addressdata" />
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
