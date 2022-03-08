import React from "react";
import { Button } from 'react-bootstrap';
import "./CalculatorKey.css";
function CalculatorKey(props) {
  return (
    <Button
      
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </Button>
  );
}

export default CalculatorKey;
