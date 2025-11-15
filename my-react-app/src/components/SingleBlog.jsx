import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="article-container">
      <h1 className="article-title">{blog.title}</h1>
      <p className="article-author">By {blog.user}</p>
      <div className="article-text">{blog.text}</div>
      <div className="comments-section">
        <h3>Comments</h3>
        {blog.comments.map((c, i) => (
          <p key={i}><strong>{c.user}:</strong> {c.comment}</p>
        ))}
        <CommentForm blogId={id} setBlog={setBlog} />
      </div>
    </div>
  );
}