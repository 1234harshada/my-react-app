import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";



// ---------------- Register Page ----------------
function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registered successfully!");
    navigate("/AuthApp/login");
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
      </div>
    </div>
  );
}



// ---------------- Login Page ----------------
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (username === storedUser.username && password === storedUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/AuthApp/dashboard");
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}



// ---------------- Dashboard Page ----------------
function DashboardPage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")) || { username: "User" };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/AuthApp/login");
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2>Welcome, {user.username}!</h2>
        <button onClick={handleLogout} style={buttonStyle}>Logout</button>
      </div>
    </div>
  );
}



// ---------------- AuthApp ----------------
function AuthApp() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="login" />} />
      <Route path="*" element={<Navigate to="login" />} />
    </Routes>
  );
}



// ---------------- Styles ----------------
const containerStyle = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f0",
};

const formStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  width: "300px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#4CAF50",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export default AuthApp;