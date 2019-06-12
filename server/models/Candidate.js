const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;

const Resume = require("./Resume");

let candidateSchema = new mongoose.Schema({
  full_name: String,
  display_name: String,
  image_url: String,
  email: String,
  phone: String,
  tags: [String],
  resume: Resume,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});
candidateSchema.plugin(mongoosastic, { esClient: elasticClient });
const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
