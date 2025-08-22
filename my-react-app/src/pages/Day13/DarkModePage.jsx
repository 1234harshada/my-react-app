import React, { useState, useEffect } from "react";

function DarkModePage() {
  // Step 1: localStorage se initial value
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // Step 2: localStorage update jab state change ho
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div style={{
      background: darkMode ? "#333" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      padding: "20px",
      transition: "all 0.3s"
    }}>
      <h1>{darkMode ? "Dark Mode ON" : "Light Mode ON"}</h1>
      <button onClick={toggleDarkMode} style={{
        padding: "10px 20px",
        cursor: "pointer",
        marginTop: "20px"
      }}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkModePage;