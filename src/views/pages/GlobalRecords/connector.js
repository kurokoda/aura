import React from "react";
import { connect } from "react-redux";

import GlobalRecords from "views/pages/GlobalRecords/component";
import {
  actionTypes as recordsActionTypes,
  actionCreators as recordsActionCreators,
} from "state/actions/records";

const ConnectedGlobalRecords = () => {
  const mapStateToProps = ({ records }) => {
    return {
      recordsList: records.data.list,
      recordsLoadingErrors: records.error
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      loadRecords: () => dispatch(recordsActionCreators.loadRecordsRequest()),
    };
  };

  const ConnectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(GlobalRecords);

  return <ConnectedComponent />;
};

export default ConnectedGlobalRecords;
