import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        const cartItems = data.filter(p => p.quantity < 5);
        setCart(cartItems);
      });
  }, []);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> :
        cart.map(p => (
          <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
            <h4>{p.name}</h4>
            <img src={p.image} alt={p.name} style={{ width: "100px" }} />
            <p>Price: ₹{p.price}</p>
            <p>{p.description}</p>
            <p>Remaining Quantity: {p.quantity}</p>
          </div>
        ))
      }
    </div>
  );
}