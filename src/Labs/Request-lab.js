import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RequestLab({ handlePopUp }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(setReducerData(medicationsData));
    navigate("/labs/lab-requests");
    // setMedicationsData(initialMedicationsData);
    handlePopUp("requested lab");
  };

  return (
    <div className="main-div">
      <h2>Request Lab</h2>
      <form onSubmit={handleSubmit}>
        <div className="parent-to-child-inputs-in-labs">
          <div className="child-div-in-labs" style={{ paddingRight: "30px" }}>
            <label>Patient</label>
            <input
              className="input is-primary child-input-in-labs"
              type="text"
              placeholder="Patient"
            ></input>
          </div>
          <div className="child-div-in-labs">
            <label>Visit</label>
            <input
              className="input is-primary child-input-in-labs"
              type="text"
              placeholder="Visit"
            ></input>
          </div>
        </div>
        <div>
          <label>Type</label>
          <input
            className="input is-primary inputs-in-labs"
            placeholder="Type"
          ></input>
        </div>
        <div>
          <label>Notes</label>
          <textarea className="input is-primary textarea-in-labs"></textarea>
        </div>
        <button type="submit" className="button is-black">
          Request Medication
        </button>
        <Link to="/labs">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
