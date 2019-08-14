import React, { Component, PropTypes } from "react";

const Counter = ({ value, handleRowClick }) => (
  <div>
    <div className="flexContainer title">
      <div>ID</div>
      <div>Title</div>
      <div>Posted By</div>
    </div>
    <div>
      {value.postList.map(item => {
        return (
          <div className="flexContainerList">
            <div
              onClick={() => {
                handleRowClick(item);
              }}
            >
              {item.id}
            </div>
            <div>{item.title}</div>
            <div>{item.userId}</div>
          </div>
        );
      })}
    </div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired
};

export default Counter;
