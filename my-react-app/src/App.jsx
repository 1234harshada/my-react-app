import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import UseState from './pages/Day3/UseState';
import UsePharma from './pages/Day4/UsePharma';
import { StyledComponents } from './pages/Day5/StyledComponents';
import Greetings from './pages/Day5/Greetings';
import Fruits from './pages/Day5/Fruits';
import DynamicStyles from './pages/Day6/DynamicStyles';
import LoginRegister from './pages/Day6/LoginRegister';
import Products from './pages/Day8/Products';
import StoreProducts from './pages/Day8/StoreProducts';
import SingleProduct from './pages/Day8/SingleProduct';
import Cart from './pages/Day8/Cart';
import PriceCalculator from './pages/Day9/PriceCalculator';
import HooksDemo from './pages/Day10/HooksDemo';
import RegistrationForm from './pages/Day11/RegistrationForm';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from './pages/Day7/NotFound';



function App() {
  return (
    <div>
      <ToastContainer position="top-right"
      autoclose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/usestate" element={<UseState />} />
        <Route path="/usepharma/:id" element={<UsePharma />} />
        <Route path="/usepharma" element={<UsePharma />} /> 
        <Route path="/styledcomponents" element={<StyledComponents />} />
        <Route path="/greetings" element={<Greetings />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/dynamicstyles" element={<DynamicStyles />} />
        <Route path="/" element={<Products />} />
        <Route path="/storeproducts" element={<StoreProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/PriceCalculator" element={<PriceCalculator />} />
        <Route path="/HooksDemo" element={<HooksDemo />} />
        <Route path="/RegistrationForm" element={<RegistrationForm />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;