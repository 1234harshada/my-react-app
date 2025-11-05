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
import MyCounter from './pages/Day12/MyCounter';
import DarkModePage from './pages/Day13/DarkModePage';
import TestApp from './pages/Day14_Test/TestApp';
import ShoppingCartApp from './pages/Day15/ShoppingCartApp';
import Calculator from './pages/Day16/Calculator';
import AuthApp from './pages/Day17_Test2/AuthApp';
import RegisterPage from './pages/LoginSystem/RegisterPage';
import LoginPage from './pages/LoginSystem/LoginPage';
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
        <Route path="/MyCounter" element={<MyCounter />} />
        <Route path="/DarkModePage" element={<DarkModePage />} />
        <Route path="/TestApp" element={<TestApp />} />
        <Route path="/ShoppingCartApp" element={<ShoppingCartApp />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/AuthApp/*" element={<AuthApp />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;