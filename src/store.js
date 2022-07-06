import { createStore, combineReducers } from "redux";
import patientReducer from "./patientReducer";

const initialState = {};

const store = createStore(
  combineReducers({ patientData: patientReducer }),
  initialState
);
window.store = store;
export default store;
