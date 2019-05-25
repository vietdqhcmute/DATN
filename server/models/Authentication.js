const mongoose = require("mongoose");

let authenticationSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true
  },
  password: String,
  role: Number,
  active: Boolean
});

const Authentication = mongoose.model("Authentication", authenticationSchema);
module.exports = Authentication;
