import { actionTypes } from "state/actions/records";

const initialState = {
  data: {
    list: [],
  },
  error: {
    count: 0,
    message: null,
  },
};

const records = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // Do something here based on the different types of actions
    case actionTypes.LOAD_RECORDS_ERROR:
      return {
        ...state,
        error: {
          count: state.error.count + 1,
          message: action.payload,
        },
      };
      console.log("LOAD_RECORDS_ERROR");
      return state;
    case actionTypes.LOAD_RECORDS_REQUEST:
      console.log("LOAD_RECORDS_REQUEST");
      return state;
    case actionTypes.LOAD_RECORDS_SUCCESS:
      console.log("LOAD_RECORDS_SUCCESS");
      return {
        data: {
          list: action.payload,
        },
        error: {
          message: null,
          count: 0,
        },
      };
      return action.payload;
    default:
      return state;
  }
};

export { records };
