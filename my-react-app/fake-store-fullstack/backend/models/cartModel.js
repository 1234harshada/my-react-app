const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  userId: String,
  products: [productSchema],
});

module.exports = mongoose.model("Cart", cartSchema);