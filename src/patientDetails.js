// import react from "react";
import { useSelector } from "react-redux";

export default function PatientDetails() {
  const patientData = useSelector((state) => state.patientData);
  // const dispatch = useDispatch();
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
    <div className="main-div">
      <h3>{patientName}</h3>
      <p>{sex}</p>
      {DOB && <p>{DOB}</p>}
      {approximateAge && <p>approximateAge</p>}
    </div>
  );
}
