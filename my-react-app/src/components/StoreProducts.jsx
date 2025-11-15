import React, { useState, useEffect } from "react";

export default function StoreProducts({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const placeOrder = async (id) => {
    const res = await fetch("http://localhost:5000/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id })
    });
    if(res.status === 400) alert("Out of stock");
    else alert("Order placed successfully!");
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  return (
    <div>
      <h2>Store Products</h2>
      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <h4>{p.name}</h4>
          <img src={p.image} alt={p.name} style={{ width: "100px" }} />
          <p>Price: ₹{p.price}</p>
          <p>{p.description}</p>
          <p>Quantity: {p.quantity}</p>
          <p>Seller: {p.seller}</p>
          <button onClick={() => placeOrder(p._id)}>Place Order</button>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
