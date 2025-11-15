import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BlogCreateForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, text, user }),
    })
      .then(res => res.json())
      .then(() => navigate('/'));
  };

  return (
    <div className="article-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Your Name"
          value={user}
          onChange={e => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder="Blog Text"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}