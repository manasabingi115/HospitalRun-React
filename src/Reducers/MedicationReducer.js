const initialState = {
  data: []
};

const medicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEDICATION_DATA":
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    default:
      return state;
  }
};

export default medicationReducer;
