import React, { useState } from 'react';
function DynamicStyles() {
  const [darkMode, setDarkMode] = useState(false);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: darkMode ? "#111" : "#f3f3f3",
    color: darkMode ? "#fff" : "#000",
    transition: "0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <h2>Dynamic Styles Page</h2>
      <p>This is the homepage with dynamic styling.</p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: darkMode ? "#fff" : "#111",
          color: darkMode ? "#111" : "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
export default DynamicStyles;