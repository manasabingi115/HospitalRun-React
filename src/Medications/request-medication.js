import React from "react";

export default function RequestMedication() {
  return (
    <div className="main-div">
      <h2>Request Medication</h2>
      <form>
        <p>Patient</p>
        <input className="inputs-in-medications" placeholder="Patient"></input>
        <br />
        <br />
        <p>Medication</p>
        <input
          className="inputs-in-medications"
          placeholder="Medication"
        ></input>
        <br />
        <br />
        <p>Status</p>
        <select className="inputs-in-medications">
          <option>---Choose---</option>
          <option>Draft</option>
          <option>Active</option>
        </select>
        <br />
        <br />
        <p>Intent</p>
        <select className="inputs-in-medications">
          <option>Proposal</option>
          <option>Plan</option>
          <option>Order</option>
          <option>Original Order</option>
          <option>Reflex Order</option>
          <option>Filler Order</option>
          <option>Instance Order</option>
          <option>Option</option>
        </select>
        <br />
        <br />
        <p>Priority</p>
        <select className="inputs-in-medications">
          <option>---Choose---</option>
          <option>Draft</option>
          <option>Active</option>
        </select>
        <br />
        <br />
        <p>Quantity | Value</p>
        <input className="inputs-in-medications"></input>
        <br />
        <br />
      </form>
    </div>
  );
}
