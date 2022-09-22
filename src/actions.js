export const setPatientDataToStore = (data, index) => {
  return {
    type: "SET_PATIENT_DATA",
    payload: data
  };
};

export const setReducerData = (data, index) => {
  return {
    type: "SET_MEDICATION_DATA",
    payload: data
  };
};
