const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  title: String,
  description: String,
  salary: String,
  tags: [],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
