import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("sellerProducts")) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2> View Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
          {products.map((item, index) => (
            <div key={index} style={{ border: "1px solid gray", borderRadius: 8, padding: 15, width: 220, boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
              <img
                src={item.imageUrl || "https://via.placeholder.com/200"}
                alt={item.name}
                style={{ width: "100%", height: 200, objectFit: "contain" }}
                onError={(e) => e.target.src = "https://via.placeholder.com/200"}
              />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;