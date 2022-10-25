import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLabDataToStore } from "../actions";

export default function RequestLab({ handlePopUp }) {
  const initialLabData = {
    patient: "",
    visit: "",
    type: "",
    notes: ""
  };
  const [labData, setLabData] = React.useState(initialLabData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setLabDataToStore(labData));
    navigate("/labs/lab-requests");
    setLabData(initialLabData);
    handlePopUp("requested lab");
  };

  return (
    <div className="main-div">
      <h2>Request Lab</h2>
      <form onSubmit={handleSubmit}>
        <div className="parent-to-child-inputs-in-labs">
          <div className="child-div-in-labs" style={{ paddingRight: "30px" }}>
            <label>Patient</label>
            <input
              className="input is-primary child-input-in-labs"
              type="text"
              placeholder="Patient"
              value={labData.patient}
              onChange={(e) =>
                setLabData((prevState) => ({
                  ...prevState,
                  patient: e.target.value
                }))
              }
            ></input>
          </div>
          <div className="child-div-in-labs">
            <label>Visit</label>
            <input
              className="input is-primary child-input-in-labs"
              type="text"
              placeholder="Visit"
              value={labData.visit}
              onChange={(e) =>
                setLabData((prevState) => ({
                  ...prevState,
                  visit: e.target.value
                }))
              }
            ></input>
          </div>
        </div>
        <div>
          <label>Type</label>
          <input
            className="input is-primary inputs-in-labs"
            placeholder="Type"
            value={labData.type}
            onChange={(e) =>
              setLabData((prevState) => ({
                ...prevState,
                type: e.target.value
              }))
            }
          ></input>
        </div>
        <div>
          <label>Notes</label>
          <textarea
            className="input is-primary textarea-in-labs"
            value={labData.notes}
            onChange={(e) =>
              setLabData((prevState) => ({
                ...prevState,
                notes: e.target.value
              }))
            }
          ></textarea>
        </div>
        <button type="submit" className="button is-black">
          Request Medication
        </button>
        <Link to="/labs">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
