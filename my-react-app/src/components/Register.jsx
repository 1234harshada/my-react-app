import React, { useState } from 'react';

function Register({ goToLogin }) {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('User');

  const handleRegister = () => {
    
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const exists = users.find(u => u.email === email);
    if(exists){
      alert("User with this email already exists!");
      return;
    }

    
    const newUser = {name,email,password,role};
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered Successfully!");
    goToLogin();
  }

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option>User</option>
        <option>Seller</option>
      </select><br/>
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register;