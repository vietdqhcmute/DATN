const mongoose = require("mongoose");

let recruitPostSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true
  },
  articles: []
});

const RecruitPost = mongoose.model("RecruitPost", recruitPostSchema);
module.exports = RecruitPost;
