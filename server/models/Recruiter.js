const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;

let recruiterSchema = new mongoose.Schema({
  _authentication: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Authentication"
  },
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
recruiterSchema.index({
  company_name: "text"
});
const Recruiter = mongoose.model("Recruiter", recruiterSchema);
// Recruiter.createMapping((err, mapping) => {
//   console.log("mapping created");
// });

// const stream = Recruiter.synchronize();
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
module.exports = Recruiter;
