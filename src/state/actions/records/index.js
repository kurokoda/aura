import { mockFetch } from "services/api/records/fetch";

const actionTypes = {
  LOAD_RECORDS_ERROR: "records/loadRecordsError",
  LOAD_RECORDS_REQUEST: "records/loadRecordsRequest",
  LOAD_RECORDS_SUCCESS: "records/loadRecordsSuccess",
};

const loadRecordsRequest = (payload) => {
  return (dispatch) => {
    // Dispatch notification on intent
    dispatch({
      type: actionTypes.LOAD_RECORDS_REQUEST,
    });
    // Fetch the data
    mockFetch()
      // Handle success
      .then((response) => {
        dispatch({
          payload: response,
          type: actionTypes.LOAD_RECORDS_SUCCESS,
        });
      })
      // Handle error
      .catch((error) => {
        dispatch({
          payload: error,
          type: actionTypes.LOAD_RECORDS_ERROR,
        });
      });
  };
};

const actionCreators = {
  loadRecordsRequest,
};

export { actionCreators, actionTypes };
