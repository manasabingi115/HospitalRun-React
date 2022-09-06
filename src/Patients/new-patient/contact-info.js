import React from "react";
import PhoneNumForm from "./phone-num-form";
import EmailForm from "./email-form";
import AddressForm from "./address-form";

export default function ContactInfo({ setInitialPatientData }) {
  return (
    <div className="NPDiv2 NPDiv">
      <p className="NPDiv-p">Contact Information</p>
      <div className="NPDiv2-boxes">
        <div className="NPDiv">
          <p className="NPDiv-p">Phone Number</p>
          <PhoneNumForm setInitialPatientData={setInitialPatientData} />
          <button className="add-button button is-primary is-inverted">
            +Add
          </button>
        </div>
        <div className="NPDiv">
          <p className="NPDiv-p">Email</p>
          <EmailForm setInitialPatientData={setInitialPatientData} />
          <button className="add-button button is-primary is-inverted">
            +Add
          </button>
        </div>
        <div className="NPDiv">
          <p className="NPDiv-p">Address</p>
          <AddressForm setInitialPatientData={setInitialPatientData} />
          <button className="add-button button is-primary is-inverted">
            +Add
          </button>
        </div>
      </div>
    </div>
  );
}
