const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cartRoutes = require("./routes/cart");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
mongoose.connect("mongodb+srv://harshada:123harshada@cluster0.mongodb.net/harshada", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected"))
.catch(err => console.error(" MongoDB Connection Failed:", err));

// Routes
app.use("/cart", cartRoutes);

app.listen(3000, () => console.log(" Server running on port 3000"));