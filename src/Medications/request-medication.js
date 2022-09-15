import React from "react";
import { Link } from "react-router-dom";

export default function RequestMedication() {
  return (
    <div className="main-div">
      <h2>Request Medication</h2>
      <form>
        <p>Patient</p>
        <input className="inputs-in-medications" placeholder="Patient"></input>

        <p>Medication</p>
        <input
          className="inputs-in-medications"
          placeholder="Medication"
        ></input>

        <p>Status</p>
        <select className="inputs-in-medications">
          <option className="options-in-medication">---Choose---</option>
          <option className="options-in-medication">Draft</option>
          <option className="options-in-medication">Active</option>
        </select>

        <p>Intent</p>
        <select className="inputs-in-medications">
          <option className="options-in-medication">Proposal</option>
          <option className="options-in-medication">Plan</option>
          <option className="options-in-medication" selected>
            Order
          </option>
          <option className="options-in-medication">Original Order</option>
          <option className="options-in-medication">Reflex Order</option>
          <option className="options-in-medication">Filler Order</option>
          <option className="options-in-medication">Instance Order</option>
          <option className="options-in-medication">Option</option>
        </select>

        <p>Priority</p>
        <select className="inputs-in-medications">
          <option className="options-in-medication">---Choose---</option>
          <option className="options-in-medication">Routine</option>
          <option className="options-in-medication">Urgent</option>
          <option className="options-in-medication">Asap</option>
          <option className="options-in-medication">Stat</option>
        </select>
        <div className="parent-to-child-inputs-in-medications">
          <div
            className="child-div-in-medications"
            style={{ paddingRight: "30px" }}
          >
            <p>Quantity | Value</p>
            <input
              className="child-input-in-medications"
              placeholder="Quantity | Value"
            ></input>
          </div>
          <div className="child-div-in-medications">
            <p>Quantity | Unit</p>
            <input
              className="child-input-in-medications"
              placeholder="Quantity | Unit"
            ></input>
          </div>
        </div>
        <p>Notes</p>
        <textarea className="textarea-in-medications"></textarea>
        <button type="submit" className="button is-black">
          Request Medication
        </button>
        <Link to="/medications">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
