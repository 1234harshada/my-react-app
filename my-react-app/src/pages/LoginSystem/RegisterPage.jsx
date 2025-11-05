import React, { useState } from "react";
import "./LoginSystem.css";

function RegisterPage() {
  const [form, setForm] = useState({ name: "Harshada", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const register = async () => {
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", "Harshada"); 
        localStorage.setItem("email", form.email);
        setMsg("Registration successful!");
        console.log("Token stored:", data.token);
      } else {
        setMsg(data.info || "Registration failed");
      }
    } catch (error) {
      console.log(error);
      setMsg("Error connecting to server");
    }
  };

  return (
    <div className="form-box">
      <h3>Harshada</h3> 
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      <button onClick={register}>Sign Up</button>
      <p id="msg">{msg}</p>
    </div>
  );
}

export default RegisterPage;