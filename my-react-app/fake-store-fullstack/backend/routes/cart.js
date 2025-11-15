const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

//  Add to Cart (if user exists → update, else create)
router.post("/add", async (req, res) => {
  const { userId, product } = req.body;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      // If product already exists, update quantity
      const existing = cart.products.find((p) => p.name === product.name);
      if (existing) {
        existing.quantity += product.quantity;
      } else {
        cart.products.push(product);
      }
      await cart.save();
    } else {
      // Create new cart
      cart = new Cart({ userId, products: [product] });
      await cart.save();
    }

    res.json({ message: "Added successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to add to cart" });
  }
});

//  Get Cart by userId
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) return res.json({ products: [] });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});

module.exports = router;