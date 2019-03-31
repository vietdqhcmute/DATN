const mongoose = require("mongoose");

let recruiterSchema = new mongoose.Schema({
  company_name: {
    type: String,
    index: { unique: true }
  },
  image_url: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  website: String,
  employees: Number,
  overview: String,
  production:String,
  day_at_work:String,

});

const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
