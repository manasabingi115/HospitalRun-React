import react from "react";
import { useDispatch, useSelector } from "react-redux";

export default function PatientDetails() {
  const patientData = useSelector((state) => state.patientData);
  const dispatch = useDispatch();
  const {
    patientName,
    familyName,
    prefix,
    suffix,
    sex,
    patientType,
    bloodType,
    DOB,
    approximateAge,
    occupation,
    preferredLang,
    phoneNums,
    emails,
    address
  } = patientData;

  return (
    <div>
      <h2>{patientName}</h2>
      <p>{sex}</p>
      {DOB && <p>{DOB}</p>}
      {approximateAge && <p>approximateAge</p>}
    </div>
  );
}
