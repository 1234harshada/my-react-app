import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const products = [
  {
    id: "1",
    name: "Cool Sneakers",
    image: "https://images.meesho.com/images/products/65402850/frriy_512.webp",
    price: "$49.99",
  },
  {
    id: "2",
    name: "Smart Watch",
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/20795182/2022/11/21/410c66ee-a0e9-47c6-955a-36416c4a696f1669020148036-Noise-ColorFit-Icon-2-Smartwatch---Deep-Wine-138166902014755-1.jpg",
    price: "$89.99",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30771088/2024/9/3/62900793-302c-42d0-bea8-38234e9595a71725361764428-boAt-Unisex-Headphones-6281725361764197-1.jpg",
    price: "$59.99",
  },
  {
    id: "4",
    name: "Trendy Backpack",
    image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/14964944/2022/11/7/97f556df-f24d-4452-9937-4138e99568b71667824949587LavieWomenBlackCroc-TexturedBackpack1.jpg",
    price: "$39.99",
  }
];

const UsePharma = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id) {
    const product = products.find((item) => item.id === id);
    return (
      <div style={{ padding: "30px", alignItems: "center", display: "flex", flexDirection: "column", fontFamily: "Arial" }}>
        <h2>Product Details Page</h2>
        {product ? (
          <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "300px",
            margin: "auto",
            justifyContent: "center",
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p style={{ fontWeight: "bold" }}>Price: {product.price}</p>
            <p>Description: This is a great product called {product.name}.</p>
            <button onClick={() => navigate("/usepharma")} style={{ marginTop: "10px" }}>Back to Products</button>
          </div>
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    );
  }

  // Show all products
  return (
    <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial" }}>
      <h2>All Products</h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map((product) => (
          <div key={product.id} onClick={() => navigate('/usepharma/${product.id}')} style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            width: "200px",
            textAlign: "center",
            cursor: "pointer"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold" }}>Price: {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsePharma;