import React, { useState } from "react";

export default function SellerOrders() {
  const [sellerName, setSellerName] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!sellerName) {
      alert("Please enter seller name");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/seller/orders/${sellerName}`);
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      console.log("Fetched orders:", data); // Debug
      setOrders(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching orders");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Seller Orders</h2>

      <input
        type="text"
        placeholder="Enter Seller Name"
        value={sellerName}
        onChange={(e) => setSellerName(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />
      <button onClick={fetchOrders} style={{ padding: "5px 10px" }}>
        Fetch Orders
      </button>

      {loading && <p>Loading...</p>}

      {!loading && orders.length === 0 && <p>No orders found for this seller</p>}

      {orders.map((order, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #aaa",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {order.products && order.products.length > 0 ? (
            order.products.map((p) => (
              <div key={p._id} style={{ marginBottom: "10px" }}>
                <h4>{p.name}</h4>
                <p>Price: ₹{p.price}</p>
                <p>Description: {p.description}</p>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: "100px", borderRadius: "5px" }}
                  />
                )}
              </div>
            ))
          ) : (
            <p>No products in this order</p>
          )}
        </div>
      ))}
    </div>
  );
}