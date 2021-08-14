import React from "react";

const Sort = ({ ascSort, descSort }) => {
  return (
    <div className="sorting-block">
      <h3>Sorting By: </h3>
      <div className="buttons">
        <button className="btn btn-main mr-2" onClick={ascSort}>
          Ascending
        </button>
        <button className="btn btn-info" onClick={descSort}>
          Descending
        </button>
      </div>
    </div>
  );
};

export default Sort;
