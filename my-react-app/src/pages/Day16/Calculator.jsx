import React, { createContext, useContext, useState } from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// ---------------- Context ----------------
export const CalcContext = createContext();

// ---------------- Redux Reducer ----------------
const initialState = { display: "0", prev: null, operator: null };

function calcReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_OPERATOR":
      return { prev: state.display, display: "0", operator: action.payload };
    case "CALCULATE":
      if (state.operator && state.prev !== null) {
        const prev = parseFloat(state.prev);
        const curr = parseFloat(state.display);
        let res = 0;
        if (state.operator === "+") res = prev + curr;
        if (state.operator === "-") res = prev - curr;
        if (state.operator === "*") res = prev * curr;
        if (state.operator === "/") res = curr !== 0 ? prev / curr : "Error";
        return { display: String(res), prev: null, operator: null };
      }
      return state;
    case "CLEAR":
      return initialState;
    case "ADD_DIGIT":
      return {
        ...state,
        display: state.display === "0" ? action.payload : state.display + action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(calcReducer);

// ---------------- Calculator Component ----------------
function CalculatorComponent() {
  const { input, setInput } = useContext(CalcContext);
  const { display } = useSelector((state) => state);
  const dispatch = useDispatch();

  const operators = ["+", "-", "*", "/"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
          textAlign: "center",
          width: "320px",
        }}
      >
        <h1 style={{ marginBottom: "5px", color: "#333" }}>React Calculator</h1>
        <h4 style={{ marginTop: "0", marginBottom: "20px", color: "gray" }}>
          Using Context + Redux
        </h4>

        {/* Display */}
        <div
          style={{
            background: "#222",
            color: "white",
            fontSize: "28px",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            textAlign: "right",
          }}
        >
          {display}
        </div>

        {/* Input (Context) */}
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter number"
          style={{
            padding: "10px",
            marginBottom: "15px",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        {/* Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {["7","8","9","/","4","5","6","*","1","2","3","-","0","C","=","+"].map((btn) => {
            if(btn === "C") return <button key={btn} style={btnStyle} onClick={() => dispatch({ type: "CLEAR" })}>{btn}</button>;
            if(btn === "=") return <button key={btn} style={btnStyle} onClick={() => dispatch({ type: "CALCULATE" })}>{btn}</button>;
            if(operators.includes(btn)) return <button key={btn} style={btnStyle} onClick={() => dispatch({ type: "SET_OPERATOR", payload: btn })}>{btn}</button>;
            return <button key={btn} style={btnStyle} onClick={() => dispatch({ type: "ADD_DIGIT", payload: btn })}>{btn}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

// ---------------- Button Style ----------------
const btnStyle = {
  padding: "18px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  background: "Black",
  cursor: "pointer",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
};

// ---------------- Export Wrapped Component ----------------
export default function Calculator() {
  const [input, setInput] = useState("");

  return (
    <Provider store={store}>
      <CalcContext.Provider value={{ input, setInput }}>
        <CalculatorComponent />
      </CalcContext.Provider>
    </Provider>
  );
}