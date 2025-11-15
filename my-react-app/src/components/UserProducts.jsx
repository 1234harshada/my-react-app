import React, { useEffect, useState } from "react";

function UserProducts() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(err => console.error(err));
  }, []);

  // Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (search.trim() !== "") {
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [search, selectedCategory, products]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2> View Products</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "5px 10px", margin: "10px", width: "200px" }}
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        style={{ padding: "5px 10px", margin: "10px" }}
      >
        <option value="all">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Products Grid */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px"
      }}>
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map(product => (
            <div key={product.id} style={{
              border: "1px solid gray",
              borderRadius: "8px",
              padding: "15px",
              width: "220px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: 200, objectFit: "contain" }}
                onError={e => e.target.src = "https://via.placeholder.com/200"}
              />
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
              <p>{product.description.substring(0, 50)}...</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default UserProducts;