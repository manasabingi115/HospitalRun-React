const initialState = {
  data: []
};

const RegisteredData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REGISTERED_DATA":
      return {
        ...state,
        data: [action.payload, ...state.data]
      };

    default:
      return state;
  }
};

export default RegisteredData;
