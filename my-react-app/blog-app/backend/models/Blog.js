const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  comment: { type: String, required: true },
}, { timestamps: true });

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  user: { type: String, required: true },
  comments: [commentSchema],
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);