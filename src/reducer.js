const initialState = {
  data: "",
  patientName: "",
  familyName: "",
  prefix: "",
  suffix: "",
  sex: "",
  patientType: "",
  bloodType: "",
  DOB: "",
  approximateAge: "",
  occupation: "",
  preferredLang: "",
  phoneNums: "",
  emails: "",
  address: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload
      };
    case "SET_PATIENT_NAME":
      return {
        ...state,
        patientName: action.payload
      };
    case "SET_FAMILY_NAME":
      return {
        ...state,
        familyName: action.payload
      };
    case "SET_PREFIX":
      return {
        ...state,
        prefix: action.payload
      };
    case "SET_SUFFIX":
      return {
        ...state,
        suffix: action.payload
      };
    case "SET_SEX":
      return {
        ...state,
        sex: action.payload
      };
    case "PATIENT_TYPE":
      return {
        ...state,
        patientType: action.payload
      };
    case "SET_BLOOD_TYPE":
      return {
        ...state,
        bloodType: action.payload
      };
    case "SET_DOB":
      return {
        ...state,
        DOB: action.payload
      };
    case "SET_APPROXIMATE_AGE":
      return {
        ...state,
        DOB: action.payload
      };

    default:
      return state;
  }
};
export default reducer;
