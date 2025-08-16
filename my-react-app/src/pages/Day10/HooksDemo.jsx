import React, { useReducer, useRef, useCallback } from "react";

// Initial state
const initialState = { count: 0 };

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default function SimpleCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickRef = useRef(0);

  // useCallback for buttons
  const handleAction = useCallback((type) => {
    dispatch({ type });
    clickRef.current += 1; // total clicks
  }, []);

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    color: "#fff",
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "White",
        color: "#000",
        padding: "30px",
        borderRadius: "15px",
        width: "350px",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
      }}
    >
      <h2>Counter</h2>
      <h3 style={{ fontSize: "30px", margin: "10px 0" }}>Count: {state.count}</h3>
      <p>Total Clicks: {clickRef.current}</p>

      <div>
        <button
          onClick={() => handleAction("INCREMENT")}
          style={{ ...buttonStyle, backgroundColor: "#4caf50" }}
        >
          Increment
        </button>
        <button
          onClick={() => handleAction("DECREMENT")}
          style={{ ...buttonStyle, backgroundColor: "#f44336" }}
        >
          Decrement
        </button>
        <button
          onClick={() => handleAction("RESET")}
          style={{ ...buttonStyle, backgroundColor: "#2196f3" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}