import React from "react";
import { Link } from "react-router-dom";

export default function Imagings() {
  return (
    <div className="main-div">
      <h2>Imagings</h2>
      <Link to="/imagings/new-imaging-request">
        <button className="button is-primary is-outlined">
          Request New Imaging
        </button>
      </Link>
    </div>
  );
}
