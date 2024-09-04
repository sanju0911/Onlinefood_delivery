const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/test";

mongoose.connect(url).then(() => {
  console.log("database connected successfully ");
});

module.exports = mongoose;
