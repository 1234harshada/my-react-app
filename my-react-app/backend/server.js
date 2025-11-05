// backend/server.js
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

const filePath = "./users.json";

// Register Route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ info: "All fields are required!" });
  }

  let users = [];
  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath));
  }

  const exist = users.find((u) => u.email === email);
  if (exist) return res.json({ info: "User already exists!" });

  users.push({ name, email, password });
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  res.json({ info: "Registration successful!" });
});

// Login Route
app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ info: "All fields are required!" });
  }

  if (!fs.existsSync(filePath)) {
    return res.json({ info: "No users found!" });
  }

  const users = JSON.parse(fs.readFileSync(filePath));
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) return res.json({ info: `Welcome ${user.name}! Login successful.` });
  res.json({ info: "Invalid email or password!" });
});

// Run server
app.listen(3000, () => console.log("Backend running on port 3000"));