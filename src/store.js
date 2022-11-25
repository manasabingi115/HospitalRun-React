import { createStore, combineReducers } from "redux";
import patientReducer from "./Reducers/patientReducer";
import medicationReducer from "./Reducers/MedicationReducer";
import labReducer from "./Reducers/LabReducer";
import ImagingReducer from "./Reducers/ImagingReducer";
import IncidentReducer from "./Reducers/IncidentReducer";
import loginData from "./Reducers/LoginReducer";

const initialState = {};

const store = createStore(
  combineReducers({
    patientData: patientReducer,
    medicationData: medicationReducer,
    labData: labReducer,
    imagingData: ImagingReducer,
    incidentData: IncidentReducer,
    RegisteredData: loginData
  }),
  initialState
);
window.store = store;
export default store;
