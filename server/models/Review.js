const mongoose = require("mongoose");

let reviewSchema = new mongoose.Schema({
  email: { type: String, index: true },
  title: String,
  rate_general: Number,
  rate_salary: Number,
  rate_training: Number,
  rate_care: Number,
  rate_culture: Number,
  rate_infrastructure: Number,
  ot_like: String,
  ot_hate: String,
  like: String,
  hate: String,
  isIntroduce: Boolean,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});
reviewSchema.index({ email: 1 });
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
