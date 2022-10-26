import React from "react";
import { Link } from "react-router-dom";

export default function Labs() {
  return (
    <div className="main-div">
      <h2>Labs</h2>
      <Link to="/labs/request-lab">
        <button className="button is-primary is-outlined">Request Lab</button>
      </Link>
    </div>
  );
}
