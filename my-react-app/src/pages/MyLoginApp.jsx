import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyLoginApp() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [name, setName] = useState("Harshada");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) setName(storedName);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const login = async () => {
    try {
      const res = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email.trim(), password: form.password })
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token); // JWT token save
        localStorage.setItem("name", "Harshada");
        setName("Harshada");

        // Toastify success message
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 3000
        });

        console.log("JWT Token:", data.token);
      } else {
        toast.error(data.info || "Invalid credentials", {
          position: "top-right",
          autoClose: 3000
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error connecting to server", {
        position: "top-right",
        autoClose: 3000
      });
    }
  };

  return (
    <div>
      {/* Toast container */}
      <ToastContainer />

      <style>{`
        .form-box {
          width: 300px;
          margin: 50px auto;
          padding: 30px;
          border: 1px solid #ccc;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0px 0px 10px #aaa;
          background-color: #f9f9f9;
        }
        .form-box input { width: 90%; padding: 8px; margin: 10px 0; border-radius: 5px; border: 1px solid #ccc; font-size: 14px; }
        .form-box button { padding: 8px 20px; border-radius: 5px; border: none; background-color: #007bff; color: white; cursor: pointer; font-size: 14px; }
        .form-box button:hover { background-color: #0056b3; }
      `}</style>

      <div className="form-box">
        <h3>{name}</h3>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        <button onClick={login}>Sign In</button>
      </div>
    </div>
  );
}

export default MyLoginApp;