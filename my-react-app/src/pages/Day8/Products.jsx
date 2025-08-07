import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 style={{ padding: "30px" }}>Loading products...</h3>;
  }

  if (error) {
    return (
      <h3 style={{ padding: "30px", color: "red" }}>
        Failed to load products. Please try again later.
      </h3>
    );
  }

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        padding: "30px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
         Product Gallery
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #333",
              borderRadius: "10px",
              padding: "15px",
              width: "200px",
              backgroundColor: "#222",
              boxShadow: "2px 2px 10px rgba(0,0,0,0.4)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              textAlign: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div
              style={{
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
            <h4
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                color: "#fff",
                minHeight: "40px",
              }}
            >
              {item.title.slice(0, 40)}...
            </h4>
            <p style={{ fontWeight: "bold", color: "lightgreen" }}>
              ₹ {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;