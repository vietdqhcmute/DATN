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
  articles_count: {
    type: Number,
    index: true
  },
  candidates_count: {
    type: Number,
    index: true
  }
});

const ReportTag = mongoose.model("ReportTag", reportTagSchema);
module.exports = ReportTag;
