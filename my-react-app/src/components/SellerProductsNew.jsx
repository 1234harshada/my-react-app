import React, { useState, useEffect } from "react";

function SellerProductsNew() {
  const initialProducts = [
    {
      name: "Nike Air Max",
      price: 7999,
      description: "Comfortable running shoes with air cushioning",
      imageUrl:
        "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/73d16394-5120-4e21-983e-0b6480c08168/W+NIKE+AIR+MAX+MOTO+2K.png",
    },
    {
      name: "Adidas Ultraboost",
      price: 8999,
      description: "Lightweight shoes with responsive cushioning",
      imageUrl:
        "https://assets.adidas.com/images/w_600,f_auto,q_auto/29602e3589a54e4aad28ba0090edbf94_9366/ULTRABOOST_1.0_SHOES_Grey_IE8976_HM1.jpg",
    },
    {
      name: "Puma RS-X",
      price: 6999,
      description: "Stylish sneakers with comfortable cushioning",
      imageUrl:
        "https://images.puma.net/images/393771/01/sv01/fnd/IND/w/800/h/800/",
    },
    {
      name: "Jordan Air 1",
      price: 9999,
      description: "Classic basketball sneakers",
      imageUrl:
        "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/849566c0-f04e-4742-96f1-8f6ca677f246/AIR+JORDAN+1+RETRO+HIGH+OG.png",
    },
    {
      name: "Converse Chuck Taylor",
      price: 3999,
      description: "Timeless canvas sneakers",
      imageUrl:
        "https://www.converse.in/media/catalog/product/a/1/a12580c_a_107x1.jpg",
    },
    {
      name: "Vans Old Skool",
      price: 4499,
      description: "Skate shoes with signature stripe",
      imageUrl:
        "https://static.super-shop.com/1410937-vans-old-skool-shoes-black-white.jpg?t=fb",
    },
  ];

  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Load products from localStorage or initialProducts
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("sellerProductsNew"));
    if (stored) setProducts(stored);
    else setProducts(initialProducts);
  }, []);

  // Save products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("sellerProductsNew", JSON.stringify(products));
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, price, description, imageUrl };
    let updatedProducts = [];

    if (editIndex === null) {
      updatedProducts = [...products, newProduct];
      alert("Product added successfully!");
    } else {
      updatedProducts = [...products];
      updatedProducts[editIndex] = newProduct;
      alert("Product updated successfully!");
    }

    setProducts(updatedProducts);
    setEditIndex(null);
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
  };

  const handleDelete = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
    alert("Product deleted successfully!");
  };

  const handleEdit = (index) => {
    const product = products[index];
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setImageUrl(product.imageUrl);
    setEditIndex(index);
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2> {editIndex === null ? "Add Product" : "Edit Product"}</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 30 }}>
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
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        /><br /><br/>
        <button type="submit">{editIndex === null ? "Add Product" : "Update Product"}</button>
      </form>

      <h2> View Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 20 }}>
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid gray",
                borderRadius: 8,
                padding: 15,
                width: 220,
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={item.imageUrl || "https://via.placeholder.com/200"}
                alt={item.name}
                style={{ width: "100%", height: 200, objectFit: "contain" }}
                onError={(e) => (e.target.src = "https://via.placeholder.com/200")}
              />
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p>{item.description}</p>
              <button onClick={() => handleEdit(index)} style={{ marginRight: 5 }}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SellerProductsNew;