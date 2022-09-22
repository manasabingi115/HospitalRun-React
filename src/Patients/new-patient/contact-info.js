import React from "react";
import PhoneNumForm from "./phone-num-form";
import EmailForm from "./email-form";
import AddressForm from "./address-form";

export default function ContactInfo({ setPatientData, patientData }) {
  const handleButton = (e) => {
    e.preventDefault();
  };

  return (
    <div className="NPDiv2 NPDiv">
      <p className="NPDiv-p">Contact Information</p>
      <div className="NPDiv2-boxes">
        <div className="NPDiv">
          <p className="NPDiv-p">Phone Number</p>
          <PhoneNumForm
            setPatientData={setPatientData}
            patientData={patientData}
          />
          <button
            className="add-button button is-primary is-inverted"
            onClick={(e) => handleButton(e)}
          >
            +Add
          </button>
        </div>
        <div className="NPDiv">
          <p className="NPDiv-p">Email</p>
          <EmailForm
            setPatientData={setPatientData}
            patientData={patientData}
          />
          <button
            className="add-button button is-primary is-inverted"
            onClick={(e) => handleButton(e)}
          >
            +Add
          </button>
        </div>
        <div className="NPDiv">
          <p className="NPDiv-p">Address</p>
          <AddressForm
            setPatientData={setPatientData}
            patientData={patientData}
          />
          <button
            className="add-button button is-primary is-inverted"
            onClick={(e) => handleButton(e)}
          >
            +Add
          </button>
        </div>
      </div>
    </div>
  );
}
