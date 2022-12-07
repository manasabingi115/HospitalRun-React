import React from "react";
import { Link } from "react-router-dom";
import Menu from "../menu";

export default function Imagings() {
  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Imagings</h2>
        <Link to="/imagings/new-imaging-request">
          <button className="button is-primary is-outlined">
            Request New Imaging
          </button>
        </Link>
      </div>
    </div>
  );
}
