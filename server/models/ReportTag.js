const mongoose = require("mongoose");

const reportTagSchema = new mongoose.Schema({
  _tag: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag"
  },
  _articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
    }
  ],
  _candidates: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Candidate"
    }
  ],
  articles_count: Number,
  candidates_count: Number
});

const ReportTag = mongoose.model("ReportTag", reportTagSchema);
module.exports = ReportTag;
