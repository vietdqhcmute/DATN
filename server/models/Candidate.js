const mongoose = require("mongoose");
let Resume = require("./Resume");

let candidateSchema = new mongoose.Schema({
  _authentication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authentication"
  },
  full_name: String,
  display_name: String,
  image_url: String,
  email: String,
  github: String,
  linkedin: String,
  phone: String,
  tags: [],
  resume: Resume,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
