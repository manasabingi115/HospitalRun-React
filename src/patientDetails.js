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

  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // console.log(makeid(5));

  return (
    <div className="main-div">
      <h2>Patient-Details</h2>
      <form className="patient-basic-info columns">
        <div className="column">
          <label for="patient-code">Patient Code: </label>
          <input
            id="patient-code"
            name="patient-code"
            value={makeid(10)}
          ></input>
          <p>
            Patient Code:
            {/* <br /> */}
            <strong> {makeid(10)}</strong>
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
      </form>
    </div>
  );
}
