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
import NotFound from './pages/Day7/NotFound';
import Products from './pages/Day8/Products';



function App() {
  return (
    <div>
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
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<Products />} />
          </Routes>
    </div>
  );
}

export default App;