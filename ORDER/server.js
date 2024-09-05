const express = require("express");
const db = require("./config/db");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
