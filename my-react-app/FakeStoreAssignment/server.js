const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/images',express.static('images'));

let products = [
  {
    _id: "1",
    name: "Running Shoes",
    price: 1200,
    description: "Comfortable running shoes for everyday workout",
    quantity: 10,
    seller: "Kishore_Rundhey",
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto/6b88cd96-20c5-43c1-8645-38d1aaac0946/PEGASUS+EASYON.png"
  },
  
];

let orders = [];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Place an order
app.post('/api/order', (req, res) => {
  const { productId } = req.body;
  const product = products.find(p => p._id === productId);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  if (product.quantity < 1) return res.status(400).json({ message: 'Out of stock' });

  product.quantity -= 1;
  orders.push({ product: { ...product }, seller: product.seller });
  res.json({ message: 'Order placed successfully' });
});

// Fetch orders by seller
app.get('/api/seller/orders/:sellerName', (req, res) => {
  const { sellerName } = req.params;
  const sellerOrders = orders.filter(o => o.seller === sellerName);
  res.json(sellerOrders.map(o => ({ products: [o.product] })));
});

app.listen(5000, () => console.log('Server running on port 5000'));