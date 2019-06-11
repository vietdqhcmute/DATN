const mongoose = require("mongoose");

let articleSchema = new mongoose.Schema({
  email_company: String,
  avatar_url: String,
  title: String,
  description: String,
  salary: String,
  tags: [String],
  active: Boolean,
  applied: [String],
  created_at: Date,
  updated_at: Date
});
articleSchema.index(
  { name: "text", tags: "text", email_company: "text" },
  { unique: true }
);
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
