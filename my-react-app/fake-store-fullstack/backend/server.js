const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory data
let users = [];
let products = [];

// Register
app.post('/register', (req, res) => {
    const { name, email, password, role } = req.body;
    const exists = users.find(u => u.email === email);
    if (exists) return res.status(400).json({ message: 'User already exists' });
    users.push({ name, email, password, role });
    res.json({ message: 'Registered successfully' });
});

// Login
app.post('/login', (req, res) => {
    const { email, password, role } = req.body;
    const user = users.find(u => u.email === email && u.password === password && u.role === role);
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    res.json({ message: 'Login successful', user });
});

// Add product (Seller only)
app.post('/product', (req, res) => {
    const { name, price, description } = req.body;
    products.push({ name, price, description });
    res.json({ message: 'Product added', products });
});

// Get all products
app.get('/products', (req, res) => {
    res.json(products);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));