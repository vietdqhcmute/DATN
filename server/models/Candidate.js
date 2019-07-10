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
  _applied: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article"
    }
  ],
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

// Candidate.createMapping((err, mapping) => {
//   console.log("mapping created");
// });

// const stream = Candidate.synchronize();
// let count = 0;

// stream.on("data", function(err, doc) {
//   count++;
// });
// stream.on("close", function() {
//   console.log("indexed " + count + " documents!");
// });
// stream.on("error", function(err) {
//   console.log(err);
// });
module.exports = Candidate;
