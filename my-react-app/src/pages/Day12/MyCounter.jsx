import React, { useReducer, useEffect } from "react";

// Reducer function
const counterReducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT": return state + 1;
    case "DECREMENT": return state - 1 >= 0 ? state - 1 : 0;
    case "RESET": return 0;
    default: return state;
  }
};

function MyCounter() {
  const savedCount = localStorage.getItem("count");
  const [count, dispatch] = useReducer(counterReducer, savedCount ? JSON.parse(savedCount) : 0);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const buttonStyle = {
    padding: "10px 25px",
    margin: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    transition: "0.2s"
  };

  const handleHover = e => e.target.style.backgroundColor = "#0056b3";
  const handleLeave = e => e.target.style.backgroundColor = "#007bff";

  return (
    <div style={{
      background: "#f7f7f7",
      color: "#333",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ marginBottom: "20px" }}>My Counter</h1>
      
      <div style={{
        marginBottom: "30px",
        padding: "20px 50px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        fontSize: "24px",
        minWidth: "150px"
      }}>
        Count: {count}
      </div>

      <div>
        <button 
          style={buttonStyle} 
          onMouseEnter={handleHover} 
          onMouseLeave={handleLeave} 
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>

        <button 
          style={buttonStyle} 
          onMouseEnter={handleHover} 
          onMouseLeave={handleLeave} 
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          -
        </button>

        <button 
          style={buttonStyle} 
          onMouseEnter={handleHover} 
          onMouseLeave={handleLeave} 
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default MyCounter;