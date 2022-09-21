import React from "react";

export default function RequestLab() {
  return (
    <div className="main-div">
      <h2>Request Lab</h2>
      <form>
        <div>
          <label>Patient</label>
          <input type="text" placeholder="Patient"></input>
          <label>Visit</label>
          <input type="text" placeholder="Visit"></input>
        </div>
      </form>
    </div>
  );
}
