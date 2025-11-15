const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create Blog
router.post('/', async (req, res) => {
  const { title, text, user } = req.body;
  const blog = new Blog({ title, text, user });
  await blog.save();
  res.json(blog);
});

// Get All Blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
});

// Get Single Blog
router.get('/:id', async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

// Add Comment
router.post('/:id/comments', async (req, res) => {
  const { user, comment } = req.body;
  const blog = await Blog.findById(req.params.id);
  blog.comments.push({ user, comment });
  await blog.save();
  res.json(blog);
});

module.exports = router;