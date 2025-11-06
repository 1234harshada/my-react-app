const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "mysecret123"; 

// Predefined user
let users = [
  { name: "Harshada", email: "harshada@example.com", password: "1234" }
];

// Signin route
app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // JWT token generate
    const token = jwt.sign(
      { name: user.name, email: user.email },
      SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ token });
  } else {
    res.json({ info: "Invalid credentials" });
  }
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));