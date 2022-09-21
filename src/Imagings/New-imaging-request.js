import React from "react";

export default function NewImagingRequests() {
  return (
    <div className="main-div">
      <h2>New Imaging Request</h2>
      <form>
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
      </form>
    </div>
  );
}
