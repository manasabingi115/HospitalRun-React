import React from "react";
import Calendar from "./Calendar";
import Menu from "../menu";

export default function AppointmentSchedule() {
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Appointment Schedule</h2>
        <Calendar />
      </div>
    </div>
  );
}
