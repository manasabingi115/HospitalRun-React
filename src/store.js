import { createStore, combineReducers } from "redux";
import patientReducer from "./Reducers/patientReducer";
import medicationReducer from "./Reducers/MedicationReducer";
import labReducer from "./Reducers/LabReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    patientData: patientReducer,
    medicationData: medicationReducer,
    labData: labReducer
  }),
  initialState
);
window.store = store;
export default store;
