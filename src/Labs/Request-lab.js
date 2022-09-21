import React from "react";

export default function RequestLab() {
  return (
    <div className="main-div">
      <h2>Request Lab</h2>
      <form>
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
      </form>
    </div>
  );
}
