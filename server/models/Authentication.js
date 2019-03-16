const mongoose = require("mongoose");

let authenticationSchema = new mongoose.Schema({
  email:{
    type: String,
    unique: true
  },
  password: String,
  role: Number
});

const Authentication = mongoose.model("Password", authenticationSchema);
module.exports = Authentication;
