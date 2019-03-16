const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  company_name: {
    type: String,
    index: { unique: true }
  },
  review_posts: []
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
