import React, { useEffect, useState } from "react";

function AddToCart({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fake Store API endpoint
  const API = "https://fakestoreapi.com/products";

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((data) => {
        if (mounted) {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "Error fetching products");
          setLoading(false);
        }
      });
    return () => (mounted = false);
  }, []);

  if (loading) return <p style={{ textAlign: "center" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              padding: 12,
              borderRadius: 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: 360,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ height: 140, objectFit: "contain", marginBottom: 8 }}
              />
              <h4 style={{ fontSize: 14, minHeight: 38 }}>{p.title}</h4>
              <p style={{ fontWeight: "bold" }}>₹{(p.price * 85).toFixed(2)}</p>
              {/* Note: FakeStore price is in USD; maine example ke liye INR conversion 85x kiya.
                  Agar aap original USD dikhana chahte ho to use p.price */}
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={() =>
                  addToCart({
                    id: p.id,
                    title: p.title,
                    price: Number((p.price * 85).toFixed(2)), // store INR price
                    image: p.image,
                  })
                }
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddToCart;