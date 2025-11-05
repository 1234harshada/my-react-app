import React, { useState } from "react";
import "./LoginSystem.css";

function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const login = async () => {
    try {
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", form.email);
        setMsg("Login successful!");
        console.log("Token found:", data.token);
      } else {
        setMsg(data.info || "Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      setMsg("Error connecting to server");
    }
  };

  return (
    <div className="form-box">
      <h3>Harshada</h3> 
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button onClick={login}>Sign In</button>
      <p id="msg">{msg}</p>
    </div>
  );
}

export default LoginPage;