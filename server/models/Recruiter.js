const mongoose = require("mongoose");

let recruiterSchema = new mongoose.Schema({
  _authentication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authentication"
  },
  company_name: {
    type: String,
    unique: true,
    index: true
  },
  image_url: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  website: String,
  employees: String,
  overview: String,
  city: String,
  production: String,
  day_at_work: String,
  slogan: String,
  created_at: Date,
  updated_at: Date
});
recruiterSchema.index({'$**': 'text'});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
