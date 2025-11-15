import React, { useState } from 'react';

function Login({ goToProducts, goToSeller }) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('User');

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password && u.role === role);
    if(user){
      alert("Login Successful!");
      if(role==='Seller') goToSeller();
      else goToProducts();
    } else {
      alert("Invalid Credentials!");
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <select value={role} onChange={e=>setRole(e.target.value)}>
        <option>User</option>
        <option>Seller</option>
      </select><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login;