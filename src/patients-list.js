// import React from "react";
import { useSelector } from "react-redux";

export default function PatientsList() {
  const patientData = useSelector((state) => state.patientData);

  const { data } = patientData;
  console.log(data);

  return (
    <div className="main-div">
      {data.map((obj, index) => (
        <p key={index}>{obj?.patientName}</p>
      ))}
    </div>
  );
}
