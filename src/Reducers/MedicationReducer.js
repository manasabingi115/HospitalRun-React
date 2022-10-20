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
    case "REMOVE_ITEM":
      let newState = [...state.data];
      newState.splice(action.payload, 1);
      return {
        ...state,
        data: [...newState]
      };
    default:
      return state;
  }
};

export default medicationReducer;
