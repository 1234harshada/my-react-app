import React, { useState, useEffect } from "react";

function SellerProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch existing products to update LocalStorage, but don't display here
    const storedProducts = JSON.parse(localStorage.getItem("sellerProducts")) || [];
    setProducts(storedProducts);
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = { name, price, description, imageUrl };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);

    // Save in LocalStorage
    localStorage.setItem("sellerProducts", JSON.stringify(updatedProducts));

    
    alert("Product added successfully!");

    setName(""); setPrice(""); setDescription(""); setImageUrl("");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2> Add Product</h2>
      <form onSubmit={handleAddProduct} style={{ marginTop: 20 }}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br/>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br /><br/>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br /><br/>
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        /><br /><br/>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default SellerProducts;