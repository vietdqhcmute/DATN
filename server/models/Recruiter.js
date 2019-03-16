const mongoose = require("mongoose");

let recruiterSchema = new mongoose.Schema({
  company_name: {
    type: String,
    index: { unique: true }
  },
  image_url: String,
  email: String,
  phone: [],
  address: String,
  city: String,
  website: String,
  employees: Number,
  overview: String,
  recruit_news: [],
  candidates_follow:[]
});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
