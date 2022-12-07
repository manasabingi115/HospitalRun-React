import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function PatientDetails({ selectedPatient, Menu }) {
  const navigate = useNavigate();

  function RegistrationDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  console.log(selectedPatient);

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Patient Details</h2>
        <form className="patient-basic-info columns">
          <div className="column">
            <label htmlFor="patient-code">Patient Code: </label>
            <input
              className="patient-details-input"
              id="patient-code"
              name="patient-code"
              value={
                selectedPatient.PatientCode
                  ? selectedPatient.PatientCode
                  : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="address">Address: </label>
            <input
              className="patient-details-input"
              id="address"
              name="address"
              value={
                selectedPatient.addressdata.address
                  ? selectedPatient.addressdata.address
                  : "- - -"
              }
              readOnly
            ></input>
            <br />
            <label htmlFor="contact-num">Contact No: </label>
            <input
              className="patient-details-input"
              id="contact-num"
              name="contact-num"
              value={
                selectedPatient.phnNumdata.num
                  ? selectedPatient.phnNumdata.num
                  : "- - -"
              }
              readOnly
            ></input>
          </div>
          <div className="column">
            <label htmlFor="patient-name">Patient Name: </label>
            <input
              className="patient-details-input"
              id="patient-name"
              name="patient-name"
              defaultValue={
                selectedPatient.patientName
                  ? selectedPatient.patientName
                  : "- - -"
              }
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
                  value={selectedPatient.sex ? selectedPatient.sex : "- - -"}
                  readOnly
                ></input>
              </div>
              <div className="column">
                <label htmlFor="gender">DOB/Age: </label>
                <input
                  className="patient-details-input"
                  id="gender"
                  name="gender"
                  value={
                    selectedPatient?.DOB
                      ? selectedPatient.DOB
                      : selectedPatient?.approximateAge
                      ? selectedPatient.approximateAge
                      : "- - -"
                  }
                  readOnly
                ></input>
              </div>
            </div>
          </div>
        </form>
        <div>
          <button onClick={() => navigate(-1)} className="back-button">
            <GoArrowLeft />
            Back
          </button>
        </div>
        {/* <button onClick={() => navigate(1)}>go forward</button> */}
      </div>
    </div>
  );
}
