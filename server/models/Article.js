const mongoose = require("mongoose");
const mongoosastic = require("mongoosastic");
const elasticClient = require("../elasticsearch/es-service").client;
let articleSchema = new mongoose.Schema({
  email_company: {
    type: String,
    es_indexed: true
  },
  avatar_url: String,
  title: String,
  description: String,
  salary: String,
  tags: {
    type: [String],
    es_indexed: true
  },
  active: Boolean,
  applied: [String],
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});
articleSchema.plugin(mongoosastic, { elasticClient: elasticClient });
const Article = mongoose.model("Article", articleSchema);
Article.createMapping((err, mapping) => {
  console.log("mapping created");
});

const stream = Article.synchronize();
let count = 0;

stream.on("data", function(err, doc) {
  count++;
});
stream.on("close", function() {
  console.log("indexed " + count + " documents!");
});
stream.on("error", function(err) {
  console.log(err);
});
module.exports = Article;
