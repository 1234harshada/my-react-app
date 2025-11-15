import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="article-container">
      {blogs.map(blog => (
        <div key={blog._id} className="blog-preview">
          <Link to={`/blogs/${blog._id}`}>
            <h2 className="article-title">{blog.title}</h2>
          </Link>
          <p className="article-author">By {blog.user}</p>
          <p>{blog.text.slice(0, 200)}...</p>
        </div>
      ))}
    </div>
  );
}