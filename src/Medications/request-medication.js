import React from "react";
import { useDispatch } from "react-redux";
import { setMedicationDataToStore } from "../actions";
import { Link, useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa";

export default function RequestMedication({ handlePopUp }) {
  const initialMedicationsData = {
    patient: "",
    medication: "",
    status: "",
    intent: "Order",
    priority: "",
    qvalue: "",
    qunit: "",
    notes: ""
  };
  const [medicationsData, setMedicationsData] = React.useState(
    initialMedicationsData
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setMedicationDataToStore(medicationsData));
    navigate("/medications/medication-requests");
    setMedicationsData(initialMedicationsData);
    handlePopUp("requested medication");
  };

  return (
    <div className="main-div">
      <h2>Request Medication</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient
          <FaStarOfLife className="red-star" />
        </label>
        <input
          className="input is-primary inputs-in-medications"
          placeholder="Patient"
          name="patient"
          value={medicationsData.patient}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              patient: e.target.value
            }))
          }
          required
        ></input>

        <label>
          Medication
          <FaStarOfLife className="red-star" />
        </label>
        <input
          className="input is-primary inputs-in-medications"
          placeholder="Medication"
          value={medicationsData.medication}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              medication: e.target.value
            }))
          }
          required
        ></input>

        <label>Status</label>
        <select
          className="input is-primary inputs-in-medications"
          value={medicationsData.status}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              status: e.target.value
            }))
          }
        >
          <option className="options-in-medication">---Choose---</option>
          <option className="options-in-medication">Draft</option>
          <option className="options-in-medication">Active</option>
        </select>

        <label>Intent</label>
        <select
          className="input is-primary inputs-in-medications"
          value={medicationsData.intent}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              intent: e.target.value
            }))
          }
        >
          <option className="options-in-medication">Proposal</option>
          <option className="options-in-medication">Plan</option>
          <option className="options-in-medication">Order</option>
          <option className="options-in-medication">Original Order</option>
          <option className="options-in-medication">Reflex Order</option>
          <option className="options-in-medication">Filler Order</option>
          <option className="options-in-medication">Instance Order</option>
          <option className="options-in-medication">Option</option>
        </select>

        <label>Priority</label>
        <select
          className="input is-primary inputs-in-medications"
          value={medicationsData.priority}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              priority: e.target.value
            }))
          }
        >
          <option className="options-in-medication">---Choose---</option>
          <option className="options-in-medication">Routine</option>
          <option className="options-in-medication">Urgent</option>
          <option className="options-in-medication">Asap</option>
          <option className="options-in-medication">Stat</option>
        </select>
        <div className="parent-to-child-inputs-in-medications">
          <div
            className="child-div-in-medications"
            style={{ paddingRight: "30px" }}
          >
            <label>Quantity | Value</label>
            <input
              className="input is-primary child-input-in-medications"
              placeholder="Quantity | Value"
              value={medicationsData.qvalue}
              onChange={(e) =>
                setMedicationsData((prevState) => ({
                  ...prevState,
                  qvalue: e.target.value
                }))
              }
            ></input>
          </div>
          <div className="child-div-in-medications">
            <label>Quantity | Unit</label>
            <input
              className="input is-primary child-input-in-medications"
              placeholder="Quantity | Unit"
              value={medicationsData.qunit}
              onChange={(e) =>
                setMedicationsData((prevState) => ({
                  ...prevState,
                  qunit: e.target.value
                }))
              }
            ></input>
          </div>
        </div>
        <label>Notes</label>
        <textarea
          className="input is-primary textarea-in-medications"
          value={medicationsData.notes}
          onChange={(e) =>
            setMedicationsData((prevState) => ({
              ...prevState,
              notes: e.target.value
            }))
          }
        ></textarea>
        <button type="submit" className="button is-black">
          Request Medication
        </button>
        <Link to="/medications">
          <button className="button is-danger">Cancel</button>
        </Link>
      </form>
    </div>
  );
}
