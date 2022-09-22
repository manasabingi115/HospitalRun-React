import React from "react";
import { useSelector } from "react-redux";
import SelectOption from "./select-option";

export default function PhoneNumForm({ setPatientData }) {
  const patientDataFromStore = useSelector((state) => state.patientData);
  const { phoneNums } = patientDataFromStore;

  return (
    <div className="NPRow">
      <div className="inputs">
        <p>Type</p>
        <p>phoneNumberType()</p>
        <SelectOption setPatientData={setPatientData} propName="phnNumdata" />
      </div>
      <div className="inputs">
        <p>Phone Number</p>
        <input
          className="input is-primary"
          type="number"
          defaultValue={phoneNums}
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
