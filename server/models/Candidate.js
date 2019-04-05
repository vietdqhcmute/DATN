const mongoose = require("mongoose");
let Resume = require("./Resume");

let candidateSchema = new mongoose.Schema({
  full_name: String,
  display_name: String,
  image_url: String,
  email: String,
  phone: String,
  resume: Resume,
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type:Date
  }
});

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
