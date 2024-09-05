const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const url = process.env.URL;

mongoose.connect(url).then(() => {
  console.log("database connected successfully ");
});

module.exports = mongoose;
