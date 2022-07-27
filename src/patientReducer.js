const initialState = {
  data: []
};

const patientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATIENT_DATA":
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    default:
      return state;
  }
};
export default patientReducer;
