const mongoose = require("mongoose");

let tagSchema = new mongoose.Schema({
  content: String
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
