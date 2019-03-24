const mongoose = require("mongoose");

let articleSchema = new mongoose.Schema({
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

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
