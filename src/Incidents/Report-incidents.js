import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIncidentDataToStore } from "../actions";
import Menu from "../menu";

export default function ReportIncident({ handlePopUp }) {
  const initialIncidentData = {
    patient: "",
    department: "",
    category: "",
    catIem: "",
    description: "",
    date: ""
  };
  const [IncidentData, setIncidentData] = React.useState(initialIncidentData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setIncidentDataToStore(IncidentData));
    navigate("/incidents/reported-incidents");
    setIncidentData(initialIncidentData);
    handlePopUp("reported new incident");
  };

  return (
    <div className="main-div-container">
      <div className="side-menu">
        <Menu />
      </div>
      <div className="main-div">
        <h2>Report Incident</h2>
        <form onSubmit={handleSubmit}>
          <div className="parent-to-child-inputs-in-incidents">
            <div
              className="child-div-in-incidents"
              style={{ paddingRight: "30px" }}
            >
              <label>Date of Incident</label>
              <input
                className="input is-primary child-input-in-incidents"
                type="date"
                value={IncidentData.date}
                onChange={(e) =>
                  setIncidentData((prevState) => ({
                    ...prevState,
                    date: e.target.value
                  }))
                }
              ></input>
            </div>
            <div className="child-div-in-incidents">
              <label>Department</label>
              <input
                className="input is-primary child-input-in-incidents"
                type="text"
                placeholder="Department"
                value={IncidentData.department}
                onChange={(e) =>
                  setIncidentData((prevState) => ({
                    ...prevState,
                    department: e.target.value
                  }))
                }
              ></input>
            </div>
          </div>

          <div className="parent-to-child-inputs-in-incidents">
            <div
              className="child-div-in-incidents"
              style={{ paddingRight: "30px" }}
            >
              <label>Category</label>
              <input
                className="input is-primary child-input-in-incidents"
                type="text"
                placeholder="Category"
                value={IncidentData.category}
                onChange={(e) =>
                  setIncidentData((prevState) => ({
                    ...prevState,
                    category: e.target.value
                  }))
                }
              ></input>
            </div>
            <div className="child-div-in-incidents">
              <label>Category Item</label>
              <input
                className="input is-primary child-input-in-incidents"
                type="text"
                placeholder="Category Item"
                value={IncidentData.catIem}
                onChange={(e) =>
                  setIncidentData((prevState) => ({
                    ...prevState,
                    catIem: e.target.value
                  }))
                }
              ></input>
            </div>
          </div>

          <div>
            <label>Description of Incident</label>
            <textarea
              className="input is-primary textarea-in-incidents"
              value={IncidentData.description}
              onChange={(e) =>
                setIncidentData((prevState) => ({
                  ...prevState,
                  description: e.target.value
                }))
              }
            ></textarea>
          </div>

          <div>
            <label>Patient</label>
            <input
              className="input is-primary inputs-in-incidents"
              placeholder="Patient"
              value={IncidentData.patient}
              onChange={(e) =>
                setIncidentData((prevState) => ({
                  ...prevState,
                  patient: e.target.value
                }))
              }
            ></input>
          </div>
          <button type="submit" className="button is-black">
            Request Medication
          </button>
          <Link to="/incidents">
            <button className="button is-danger">Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  );
}
