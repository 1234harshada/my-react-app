import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import UseState from './pages/Day3/UseState';
import UsePharma from './pages/Day4/UsePharma';

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
      </Routes>
    </div>
  );
}

export default App;