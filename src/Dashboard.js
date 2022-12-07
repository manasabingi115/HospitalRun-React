import React from "react";
import Menu from "./menu";
export default function Dashboard() {
  return (
    <div>
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Dashboard</h2>
        <h4>Example</h4>
      </div>
    </div>
  );
}
