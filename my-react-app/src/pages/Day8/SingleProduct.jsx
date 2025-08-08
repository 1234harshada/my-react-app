import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (loading)
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2>Loading product details...</h2>
      </div>
    );

  if (error)
    return (
      <div style={{ padding: "30px", textAlign: "center" }}>
        <h2 style={{ color: "red" }}>Error: {error}</h2>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#333",
            color: "white",
          }}
        >
          Go Back
        </button>
      </div>
    );

  if (!product) return null; // extra safety

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: "15px",
          padding: "10px 15px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#555",
          color: "white",
        }}
      >
        ← Back to Products
      </button>

      <h2>{product.title}</h2>
      <img
        src={product.image}
        alt={`Image of ${product.title}`}
        style={{ width: "100%", maxWidth: "300px", height: "auto", objectFit: "contain" }}
      />
      <p style={{ marginTop: "15px" }}>{product.description}</p>
      <h3 style={{ color: "green", marginTop: "10px" }}>₹ {product.price}</h3>

      <div style={{ marginTop: "15px" }}>
        <label htmlFor="quantity" style={{ marginRight: "10px" }}>
          Quantity:
        </label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => {
            const val = Number(e.target.value);
            if (val >= 1) setQuantity(val);
          }}
          style={{ width: "60px", padding: "5px" }}
        />
      </div>

      <button
        onClick={addToCart}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          backgroundColor: "orange",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProduct;