import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* =========================
   Blog Components
========================= */
import BlogList from './components/BlogList';
import SingleBlog from './components/SingleBlog';
import BlogCreateForm from './components/BlogCreateForm';

/* =========================
   Old / Previous Components
========================= */
import Home from './pages/Home';
import Profile from './pages/Profile';
import UseState from './pages/Day3/UseState';
import UsePharma from './pages/Day4/UsePharma';
import { StyledComponents } from './pages/Day5/StyledComponents';
import Greetings from './pages/Day5/Greetings';
import Fruits from './pages/Day5/Fruits';
import LoginRegister from './pages/Day6/LoginRegister';
import Products from './pages/Day8/Products';
import StoreProducts from './components/StoreProducts';
import SingleProduct from './pages/Day8/SingleProduct';
import Cart from './pages/Day8/Cart';
import PriceCalculator from './pages/Day9/PriceCalculator';
import HooksDemo from './pages/Day10/HooksDemo';
import RegistrationForm from './pages/Day11/RegistrationForm';
import MyCounter from './pages/Day12/MyCounter';
import DarkModePage from './pages/Day13/DarkModePage';
import TestApp from './pages/Day14_Test/TestApp';
import ShoppingCartApp from './pages/Day15/ShoppingCartApp';
import Calculator from './pages/Day16/Calculator';
import AuthApp from './pages/Day17_Test2/AuthApp';
import RegisterPage from './pages/LoginSystem/RegisterPage';
import LoginPage from './pages/LoginSystem/LoginPage';

/* =========================
   Components
========================= */
import RegisterUser from './components/Register';
import LoginUser from './components/Login';
import SellerProduct from './components/SellerProduct';
import UserProducts from './components/UserProducts';

/* =========================
   Extra / Assignment Components
========================= */
import StoreProductsComp from './components/StoreProducts';
import SellerOrders from './components/SellerOrders';
import AddToCart from './components/AddToCart';
import CartList from './components/CartList';

/* =========================
   NotFound Page
========================= */
import NotFound from './pages/Day7/NotFound';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const idx = cartItems.findIndex(p => p._id === product._id);
    if (idx !== -1) {
      const copy = [...cartItems];
      copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + 1 };
      setCartItems(copy);
      toast.success(`${product.name} quantity updated in cart!`);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(p => p._id !== id));
    toast.info("Item removed from cart!");
  };

  return (
    <div>
      {/* Toast */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Navbar */}
      <nav style={{ padding: '10px', borderBottom: '1px solid gray', textAlign: 'center' }}>
        <Link style={{ margin: '0 10px'}} to="/">Home</Link>
        <Link style={{ margin: '0 10px'}} to="/create">Create Blog</Link>
        <Link style={{ margin: '0 10px'}} to="/profile">Profile</Link>
        <Link style={{ margin: '0 10px'}} to="/products">Products</Link>
        <Link style={{ margin: '0 10px'}} to="/storeproducts">Store Products</Link>
        <Link style={{ margin: '0 10px'}} to="/cart">View Cart ({cartItems.length})</Link>
      </nav>

      {/* Routes */}
      <Routes>
        {/* Blog App */}
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/create" element={<BlogCreateForm />} />

        {/* Old / Previous Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usepharma/:id" element={<UsePharma />} />
        <Route path="/usepharma" element={<UsePharma />} />
        <Route path="/styledcomponents" element={<StyledComponents />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/products" element={<Products />} />
        <Route path="/storeproducts" element={<StoreProductsComp addToCart={addToCart} />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PriceCalculator" element={<PriceCalculator />} />
        <Route path="/HooksDemo" element={<HooksDemo />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="/MyCounter" element={<MyCounter />} />
        <Route path="/DarkModePage" element={<DarkModePage />} />
        <Route path="/TestApp" element={<TestApp />} />
        <Route path="/ShoppingCartApp" element={<ShoppingCartApp />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/AuthApp/*" element={<AuthApp />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* Components */}
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/seller-product" element={<SellerProduct />} />
        <Route path="/user-products" element={<UserProducts />} />

        {/* Extra / Assignment Components */}
        <Route path="/seller-orders" element={<SellerOrders />} />
        <Route path="/addtocart" element={<AddToCart addToCart={addToCart} />} />
        <Route path="/viewcart" element={<CartList cartItems={cartItems} removeFromCart={removeFromCart} />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;