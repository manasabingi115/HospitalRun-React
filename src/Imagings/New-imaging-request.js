import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setImagingDataToStore } from "../actions";

export default function NewImagingRequests({ handlePopUp }) {
  const initialImagingData = {
    patient: "",
    visit: "",
    type: "",
    status: "",
    notes: ""
  };
  const [ImagingData, setImagingData] = React.useState(initialImagingData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setImagingDataToStore(ImagingData));
    navigate("/imagings/imaging-requests");
    setImagingData(initialImagingData);
    handlePopUp("requested new imaging");
  };

  return (
    <div className="main-div">
      <h2>New Imaging Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="parent-to-child-inputs-in-imagings">
          <div
            className="child-div-in-imagings"
            style={{ paddingRight: "30px" }}
          >
            <label>Patient</label>
            <input
              className="input is-primary child-input-in-imagings"
              type="text"
              placeholder="Patient"
              value={ImagingData.patient}
              onChange={(e) =>
                setImagingData((prevState) => ({
                  ...prevState,
                  patient: e.target.value
                }))
              }
            ></input>
          </div>
          <div className="child-div-in-imagings">
            <label>Visit</label>
            <input
              className="input is-primary child-input-in-imagings"
              type="text"
              placeholder="Visit"
              value={ImagingData.visit}
              onChange={(e) =>
                setImagingData((prevState) => ({
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
            className="input is-primary inputs-in-imagings"
            placeholder="Type"
            value={ImagingData.type}
            onChange={(e) =>
              setImagingData((prevState) => ({
                ...prevState,
                type: e.target.value
              }))
            }
          ></input>
        </div>
        <div>
          <label>Status</label>
          <select
            className="input is-primary"
            value={ImagingData.status}
            onChange={(e) =>
              setImagingData((prevState) => ({
                ...prevState,
                status: e.target.value
              }))
            }
          >
            <option>Requested</option>
            <option>Completed</option>
            <option>Canceled</option>
          </select>
        </div>
        <div>
          <label>Notes</label>
          <textarea
            className="input is-primary textarea-in-imagings"
            value={ImagingData.notes}
            onChange={(e) =>
              setImagingData((prevState) => ({
                ...prevState,
                notes: e.target.value
              }))
            }
          ></textarea>
        </div>
        <button type="submit" className="button is-black">
          Request Medication
        </button>
        <Link to="/imagings">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
