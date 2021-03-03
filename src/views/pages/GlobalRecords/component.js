import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Record } from "views/components/Record";

const MAXIMUM_LOADING_ATTEMPTS = 3;

const GlobalRecords = ({ loadRecords, recordsList, recordsLoadingErrors }) => {
  useEffect(() => {
    loadRecords();
  }, []);

  useEffect(() => {
    const { count: errorCount, message: errorMessage } = recordsLoadingErrors;
    if (errorCount) {
      if (errorCount < MAXIMUM_LOADING_ATTEMPTS) {
        loadRecords();
      } else {
        console.log(`Fatal error loading records after ${errorCount} attempts`);
        console.log(`Error message: ${errorMessage}`);
      }
    }
  }, [recordsLoadingErrors]);

  return (
    <div className="aura-page aura-global_records">
      <h1>Top Records of 2020</h1>

      <div className="aura-page-content">
        {!recordsList.length ? <h3>Please wait...</h3> : null}
        {recordsLoadingErrors.count === MAXIMUM_LOADING_ATTEMPTS ? (
          <h3>There was an error loading the data.</h3>
        ) : null}
        {recordsList.map((record) => {
          return <Record key={record.id} data={record} />;
        })}
      </div>
    </div>
  );
};

export default GlobalRecords;
