const mongoose = require("mongoose");

let reviewPostSchema = new mongoose.Schema({
  title: String,
  rate_general: Number,
  rate_salary: Number,
  rate_training: Number,
  rate_care: Number,
  rate_culture: Number,
  rate_infrastructure: Number,
  title: String,
  ot_like: String,
  ot_hate: String,
  like: String,
  hate: String,
  isIntroduce: Boolean,
  created_at: {
    type: Date,
    default: Date.now
  }
});

const ReviewPost = mongoose.model("ReviewPost", reviewPostSchema);
module.exports = ReviewPost;
