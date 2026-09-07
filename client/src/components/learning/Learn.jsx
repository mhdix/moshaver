import React, { useReducer, useState } from "react";

// useReducer
const INITIAL_VALUE = 0;

function countReducer(state, { type, payload = 0 }) {
  // console.log(state, action);
  // if (type == "INC") return state + payload;
  // if (type == "RES") return INITIAL_VALUE;
  // if (type == "DEC") return state - payload;

  switch (type) {
    case "INC":
      return state + payload;
      break;
    case "Res":
      return INITIAL_VALUE;
      break;
    case "DEC":
      return state - payload;
      break;

    default:
      return INITIAL_VALUE;

      break;
  }
}

const Learn = () => {
  const [count, dispatch] = useReducer(countReducer, INITIAL_VALUE);

  const handleInc = () => {
    dispatch({ type: "INC", payload: 1 });
  };
  const handleRes = () => {
    dispatch({ type: "RES" });
  };
  const handleDec = () => {
    dispatch({ type: "DEC", payload: 1 });
  };

  return (
    <div
      dir="ltr"
      style={{
        margin: "10px 50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{count}</p>
      <div>
        <button onClick={handleInc}>INC</button>
        <button onClick={handleRes}>RESET</button>
        <button onClick={handleDec}>DEC</button>
      </div>
    </div>
  );
};

export default Learn;
