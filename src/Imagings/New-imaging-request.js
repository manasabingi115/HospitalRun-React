import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewImagingRequests({ handlePopUp }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch(setReducerData(medicationsData));
    navigate("/imagings/imaging-requests");
    // setMedicationsData(initialMedicationsData);
    handlePopUp("requested lab");
  };

  return (
    <div className="main-div">
      <h2>New Imaging Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="parent-to-child-inputs-in-imagings">
          <div
            className="child-div-in-imagings"
            style={{ paddingRight: "30px" }}
          >
            <label>Patient</label>
            <input
              className="input is-primary child-input-in-imagings"
              type="text"
              placeholder="Patient"
            ></input>
          </div>
          <div className="child-div-in-imagings">
            <label>Visit</label>
            <input
              className="input is-primary child-input-in-imagings"
              type="text"
              placeholder="Visit"
            ></input>
          </div>
        </div>
        <div>
          <label>Type</label>
          <input
            className="input is-primary inputs-in-imagings"
            placeholder="Type"
          ></input>
        </div>
        <div>
          <label>Status</label>
          <select className="input is-primary">
            <option>Requested</option>
            <option>Completed</option>
            <option>Canceled</option>
          </select>
        </div>
        <div>
          <label>Notes</label>
          <textarea className="input is-primary textarea-in-imagings"></textarea>
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
