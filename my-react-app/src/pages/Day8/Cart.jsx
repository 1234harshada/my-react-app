import React, { useState, useEffect } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // LocalStorage se cart data le lo
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, qty) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: qty } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const filteredCart = cartItems.filter(item => item.id !== id);
    setCartItems(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) return <h2>Your cart is empty.</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} style={{ width: "100px", objectFit: "contain" }} />
          <p>Price: ₹ {item.price}</p>
          <label>
            Quantity: 
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
              style={{ marginLeft: "10px", width: "50px" }}
            />
          </label>
          <br />
          <button onClick={() => removeItem(item.id)} style={{ marginTop: "10px", background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total Price: ₹ {totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;