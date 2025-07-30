import React, { useState, useEffect } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Harshada");

  // Runs only once when component mounts
  useEffect(() => {
    alert(" Welcome Sir! This app is built by Harshada using React Hooks.");
    console.log(" App has mounted successfully.");
  }, []);

  // Runs on every render
  useEffect(() => {
    console.log(" App re-rendered.");
  });

  
  useEffect(() => {
    console.log("Runs when count count changes");
  }, [count]);

  
  useEffect(() => {
    console.log("Runs when name OR count changes");
  }, [name, count]);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "80px",
        backgroundColor: "Orange",
      }}
    >
      <h1> Hello Sir! React Hooks App by Harshada"</h1>
      <p style={{ marginBottom: "20px", color: "#333" }}>
          Welcome, {name || "Guest"}!
      </p>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "20px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <h2> Counter: {count}</h2>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={handleIncrement}
          style={{ marginRight: "10px", padding: "8px 12px" }}
        >
           Increment
        </button>
        <button
          onClick={handleDecrement}
          style={{ marginRight: "10px", padding: "8px 12px" }}
        >
           Decrement
        </button>
        <button onClick={handleReset} style={{ padding: "8px 12px" }}>
           Reset
        </button>
      </div>
    </div>
  );
};

export default UseState;