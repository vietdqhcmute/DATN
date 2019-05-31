const mongoose = require("mongoose");

let articleSchema = new mongoose.Schema({
  email_company: String,
  avatar_url: String,
  title: String,
  description: String,
  salary: String,
  tags: [String],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
articleSchema.index({ name: 'text', tags: 'text', email_company: 'text' }, { unique: true });
const Article = mongoose.model("Article", articleSchema);
module.exports = Article;
