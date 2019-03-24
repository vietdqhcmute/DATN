const mongoose = require("mongoose");

let recruitPostSchema = new mongoose.Schema({
  company_name: {
    type: String,
    unique: true
  },
  articles: []
});

const RecruitPost = mongoose.model("RecruitPost", recruitPostSchema);
module.exports = RecruitPost;
