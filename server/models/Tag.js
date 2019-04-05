const mongoose = require("mongoose");

let tagSchema = new mongoose.Schema({
  tag_name:{
    type: String,
    unique: true
  }
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
