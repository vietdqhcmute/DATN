const mongoose = require("mongoose");

let reviewPostSchema = new mongoose.Schema({
  display_name: String,
  title: String,
  rate: Number,
  like:String,
  not_like: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: Date
});

const ReviewPost = mongoose.model("ReviewPost", reviewPostSchema);
module.exports = ReviewPost;
