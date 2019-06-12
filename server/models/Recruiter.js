const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;

let recruiterSchema = new mongoose.Schema({
  company_name: String,
  image_url: String,
  email: {
    type: String,
    unique: true,
    es_indexed: true
  },
  phone: String,
  address: String,
  city: {
    type: String,
    es_indexed: true
  },
  website: String,
  employees: String,
  overview: String,
  production: String,
  day_at_work: String,
  slogan: String,
  created_at: Date,
  updated_at: Date
});
recruiterSchema.plugin(mongoosastic, { elasticClient: elasticClient });
const Recruiter = mongoose.model("Recruiter", recruiterSchema);
module.exports = Recruiter;
