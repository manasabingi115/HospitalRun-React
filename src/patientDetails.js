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
      <h2>Patient-Details</h2>
      <div className="patient-basic-info columns">
        <div className="column">
          <p>
            Registration No:<strong>{}</strong>
          </p>
          <p>
            Address:<strong>{address}</strong>
          </p>
          <p>
            Contact No:<strong>{phoneNums}</strong>
          </p>
        </div>
        <div className="column">
          <p>
            Patient Name:<strong>{patientName}</strong>
          </p>
          <p>
            Registration Date:<strong></strong>
          </p>
          <div className="patient-details-mini-block columns">
            <div className="column">
              Gender:<strong>{sex}</strong>
            </div>
            <div className="column">
              DOB/Age:{DOB && <strong>{DOB}</strong>}
              {approximateAge && <strong>approximateAge</strong>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
