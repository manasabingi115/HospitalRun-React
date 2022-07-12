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

  function RegistrationDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    // console.log(today);
    return today;
  }

  return (
    <div className="main-div">
      <h2>Patient-Details</h2>
      <form className="patient-basic-info columns">
        <div className="column">
          <label htmlFor="patient-code">Patient Code: </label>
          <input
            className="patient-details-input"
            id="patient-code"
            name="patient-code"
            value={makeid(10)}
            readOnly
          ></input>
          <br />
          <label htmlFor="address">Address: </label>
          <input
            className="patient-details-input"
            id="address"
            name="address"
            value={address}
            readOnly
          ></input>
          <br />
          <label htmlFor="contact-num">Contact No: </label>
          <input
            className="patient-details-input"
            id="contact-num"
            name="contact-num"
            value={phoneNums}
            readOnly
          ></input>
        </div>
        <div className="column">
          <label htmlFor="patient-name">Patient Name: </label>
          <input
            className="patient-details-input"
            id="patient-name"
            name="patient-name"
            value={patientName}
            readOnly
          ></input>
          <br />
          <label htmlFor="reg-date">Registration Date: </label>
          <input
            className="patient-details-input"
            id="reg-date"
            name="reg-date"
            value={RegistrationDate()}
            readOnly
          ></input>
          <br />
          <div className="patient-details-mini-block columns">
            <div className="column">
              <label htmlFor="gender">Gender: </label>
              <input
                className="patient-details-input"
                id="gender"
                name="gender"
                value={sex}
                readOnly
              ></input>
            </div>
            <div className="column">
              <label htmlFor="gender">DOB/Age: </label>
              <input
                className="patient-details-input"
                id="gender"
                name="gender"
                value={DOB ? DOB : approximateAge ? approximateAge : null}
                readOnly
              ></input>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
