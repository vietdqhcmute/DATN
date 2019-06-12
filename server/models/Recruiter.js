const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;

let recruiterSchema = new mongoose.Schema({
  company_name: {
    type: String,
    index: {
      unique: true
    }
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
recruiterSchema.plugin(mongoosastic, { esClient: elasticClient });
const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
