import React from "react";

export default function ReportIncident() {
  return (
    <div className="main-div">
      <h2>Report Incident</h2>
      <form>
        <div className="parent-to-child-inputs-in-incidents">
          <div
            className="child-div-in-incidents"
            style={{ paddingRight: "30px" }}
          >
            <label>Date of Incident</label>
            <input
              className="input is-primary child-input-in-incidents"
              type="date"
            ></input>
          </div>
          <div className="child-div-in-incidents">
            <label>Department</label>
            <input
              className="input is-primary child-input-in-incidents"
              type="text"
              placeholder="Department"
            ></input>
          </div>
        </div>

        <div className="parent-to-child-inputs-in-incidents">
          <div
            className="child-div-in-incidents"
            style={{ paddingRight: "30px" }}
          >
            <label>Category</label>
            <input
              className="input is-primary child-input-in-incidents"
              type="text"
              placeholder="Category"
            ></input>
          </div>
          <div className="child-div-in-incidents">
            <label>Category Item</label>
            <input
              className="input is-primary child-input-in-incidents"
              type="text"
              placeholder="Category Item"
            ></input>
          </div>
        </div>

        <div>
          <label>Description of Incident</label>
          <textarea className="input is-primary textarea-in-incidents"></textarea>
        </div>

        <div>
          <label>Patient</label>
          <input
            className="input is-primary inputs-in-incidents"
            placeholder="Patient"
          ></input>
        </div>
      </form>
    </div>
  );
}
