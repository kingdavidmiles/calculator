import React from "react";
import "./CalculatorKey.css";
function CalculatorKey(props) {
  return (
    <button
    type="button" className="btn btn-outline-primary"
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default CalculatorKey;
