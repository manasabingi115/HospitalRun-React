import { createStore, combineReducers } from "redux";
import patientReducer from "./Reducers/patientReducer";
import medicationReducer from "./Reducers/MedicationReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    patientData: patientReducer,
    medicationData: medicationReducer
  }),
  initialState
);
window.store = store;
export default store;
