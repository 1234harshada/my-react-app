import React, { useState } from 'react';

export default function CommentForm({ blogId, setBlog }) {
  const [user, setUser] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:3000/blogs/${blogId}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user, comment }),
    })
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setUser('');
        setComment('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Your Name"
        value={user}
        onChange={e => setUser(e.target.value)}
        required
      />
      <textarea
        placeholder="Comment"
        value={comment}
        onChange={e => setComment(e.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}