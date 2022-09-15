import React from "react";
import { useDispatch } from "react-redux";
import { setReducerData } from "../actions";
import { useNavigate } from "react-router-dom";

export default function RequestMedication() {
  const [initialMedicationsData, setInitialMedicationsData] = React.useState({
    patient: "",
    medication: "",
    status: "",
    intent: "",
    priority: "",
    qvalue: "",
    qunit: "",
    notes: ""
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setReducerData(initialMedicationsData));
    navigate("/medications/request-medication");
    console.log("form submitted.");
    setInitialMedicationsData({ [event.target.name]: "" });
  };

  console.log(initialMedicationsData);

  return (
    <div className="main-div">
      <h2>Request Medication</h2>
      <form onSubmit={handleSubmit}>
        <p>Patient</p>
        <input
          className="inputs-in-medications"
          placeholder="Patient"
          name="patient"
          value={initialMedicationsData.patient}
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
              ...prevState,
              patient: e.target.value
            }))
          }
        ></input>

        <p>Medication</p>
        <input
          className="inputs-in-medications"
          placeholder="Medication"
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
              ...prevState,
              medication: e.target.value
            }))
          }
        ></input>

        <p>Status</p>
        <select
          className="inputs-in-medications"
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
              ...prevState,
              status: e.target.value
            }))
          }
        >
          <option className="options-in-medication">---Choose---</option>
          <option className="options-in-medication">Draft</option>
          <option className="options-in-medication">Active</option>
        </select>

        <p>Intent</p>
        <select
          className="inputs-in-medications"
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
              ...prevState,
              intent: e.target.value
            }))
          }
        >
          <option className="options-in-medication">Proposal</option>
          <option className="options-in-medication">Plan</option>
          <option className="options-in-medication" selected>
            Order
          </option>
          <option className="options-in-medication">Original Order</option>
          <option className="options-in-medication">Reflex Order</option>
          <option className="options-in-medication">Filler Order</option>
          <option className="options-in-medication">Instance Order</option>
          <option className="options-in-medication">Option</option>
        </select>

        <p>Priority</p>
        <select
          className="inputs-in-medications"
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
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
            <p>Quantity | Value</p>
            <input
              className="child-input-in-medications"
              placeholder="Quantity | Value"
              onChange={(e) =>
                setInitialMedicationsData((prevState) => ({
                  ...prevState,
                  qvalue: e.target.value
                }))
              }
            ></input>
          </div>
          <div className="child-div-in-medications">
            <p>Quantity | Unit</p>
            <input
              className="child-input-in-medications"
              placeholder="Quantity | Unit"
              onChange={(e) =>
                setInitialMedicationsData((prevState) => ({
                  ...prevState,
                  qunit: e.target.value
                }))
              }
            ></input>
          </div>
        </div>
        <p>Notes</p>
        <textarea
          className="textarea-in-medications"
          onChange={(e) =>
            setInitialMedicationsData((prevState) => ({
              ...prevState,
              notes: e.target.value
            }))
          }
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
