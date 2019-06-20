const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;

const Resume = require("./Resume");

let candidateSchema = new mongoose.Schema({
  _authentication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authentication"
  },
  full_name: String,
  display_name: String,
  image_url: String,
  github: String,
  linkedin: String,
  email: {
    type: String,
    es_indexed: true
  },
  phone: String,
  tags: {
    type: [String],
    es_indexed: true
  },
  resume: Resume,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});
candidateSchema.plugin(mongoosastic, { elasticClient: elasticClient });
const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
