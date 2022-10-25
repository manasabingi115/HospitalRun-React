export const setPatientDataToStore = (data) => {
  return {
    type: "SET_PATIENT_DATA",
    payload: data
  };
};

export const setRemoveItem = (index) => {
  return {
    type: "REMOVE_ITEM",
    payload: index
  };
};

export const setMedicationDataToStore = (data) => {
  return {
    type: "SET_MEDICATION_DATA",
    payload: data
  };
};

export const setLabDataToStore = (data) => {
  return {
    type: "SET_LAB_DATA",
    payload: data
  };
};
