import { createStore, combineReducers } from "redux";
import reducer from "./reducer";

const initialState = {};

const store = createStore(
  combineReducers({ patientData: reducer }),
  initialState
);
window.store = store;
export default store;
