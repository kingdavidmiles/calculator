import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";
import { Card, Row, Col, Stack } from "react-bootstrap";

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [op, setOp] = useState(null);

  useEffect(() => {}, [op, nextValue, prevValue]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
    "=": (firstValue, secondValue) => secondValue,
  };

  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setOp(null);
    setNextValue(String(temp));
    setPrevValue(null);
  };

  const handleNum = (number) => {
    setNextValue(nextValue === "0" ? String(number) : nextValue + number);
  };

  const insertDot = () => {
    if (!/\./.test(nextValue)) {
      setNextValue(nextValue + ".");
    }
  };
  const percentage = () => {
    setNextValue(parseFloat(nextValue) / 100);
    if (prevValue && nextValue === "") {
      setPrevValue(parseFloat(prevValue) / 100);
    }
  };
  const changeSign = () => {
    setNextValue(parseFloat(nextValue) * -1);
  };
  const clearData = () => {
    setNextValue("0");
    setPrevValue(0);
  };

  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        setPrevValue(nextValue);
        setNextValue("");
      }
      if (op) {
        setOp(value);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "\xB1") {
      changeSign();
    } else if (value === ".") {
      insertDot();
    } else if (value === "%") {
      percentage();
    }
  };

  return (
    <div>
      <Row>
        <Col md={4}></Col>

        <Col md={3} className="pt-5">
          <Card className="card border-dark"> 
            <Card.Body>
              <Card
                border="primary"
                style={{ height: "4rem" }}
                className="shadow-md "
              >
                <div className="p-3">{nextValue}</div>
              </Card>
              {/* keyboard inputs */}

              <Row>
                <Col md={12} className="pt-5">
                  <Stack direction="horizontal" gap={4}>
                    <CalculatorKey
                      className="key-zero"
                      keyValue={0}
                      onClick={handleOperation}
                    />
                    <CalculatorKey
                      keyValue={1}
                      onClick={handleOperation}
                      className="digit-1"
                    />
                    <CalculatorKey
                      keyValue={2}
                      onClick={handleOperation}
                      className="digit-2"
                    />
                    <CalculatorKey
                      keyValue={3}
                      onClick={handleOperation}
                      className="digit-3"
                    />
                  </Stack>
                  <Stack direction="horizontal" gap={4} className="pt-2">
                    <CalculatorKey
                      keyValue={4}
                      onClick={handleOperation}
                      className="digit-4"
                    />

                    <CalculatorKey
                      keyValue={5}
                      onClick={handleOperation}
                      className="digit-5"
                    />
                    <CalculatorKey
                      keyValue={6}
                      onClick={handleOperation}
                      className="digit-6"
                    />
                    <CalculatorKey
                      keyValue={7}
                      onClick={handleOperation}
                      className="digit-7"
                    />
                  </Stack>

                  <Stack direction="horizontal" gap={4} className="pt-2 ">
                    <CalculatorKey
                      keyValue={8}
                      onClick={handleOperation}
                      className="digit-8"
                    />
                    <CalculatorKey
                      keyValue={9}
                      onClick={handleOperation}
                      className="digit-9"
                    />
                    <CalculatorKey
                      keyValue={"+"}
                      onClick={handleOperation}
                      className="op-div"
                    />
                    <CalculatorKey
                      keyValue={"-"}
                      onClick={handleOperation}
                      className="op-sub"
                    />
                  </Stack>

                  <Stack direction="horizontal" gap={4} className="pt-2">
                    <CalculatorKey
                      keyValue={"*"}
                      onClick={handleOperation}
                      className="op-mul"
                    />

                    <CalculatorKey keyValue={"/"} onClick={handleOperation} />
                    <CalculatorKey
                      keyValue={"="}
                      onClick={handleOperation}
                      className="eq"
                    />
                    <CalculatorKey
                      keyValue={"c"}
                      onClick={handleOperation}
                      className="clear"
                    />
                  </Stack>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}></Col>
      </Row>
    </div>
  );
}

export default Calculator;
