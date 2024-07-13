import React from "react";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

const OperationState = ({ operationCount = { count: 0 } }) => (
  <div className="w-2/5 h-full float-right">
    <b className="align-middle text-white">rhfktj@gmail.com</b>
  </div>
);

OperationState.propTypes = {
  operationCount: PropTypes.object,
};

export default OperationState;
