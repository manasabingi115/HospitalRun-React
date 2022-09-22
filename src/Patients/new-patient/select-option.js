import React from "react";

export default function SelectOption({ setPatientData, propName }) {
  return (
    <div>
      <select
        className="input is-primary"
        onChange={(e) =>
          setPatientData((prevState) => ({
            ...prevState,
            [propName]: {
              ...prevState[propName],
              type: e.target.value
            }
          }))
        }
      >
        <option>---Choose---</option>
        <option>Home</option>
        <option>Mobile</option>
        <option>Work</option>
        <option>Temperary</option>
        <option>Old</option>
      </select>
    </div>
  );
}
