const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  review_posts: []
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
