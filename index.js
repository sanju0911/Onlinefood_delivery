const express = require("express");
const db = require("./config/db");
const app = express();

app.use(express.json());
//app.use(express.urlencoded({}));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", (req, res) => {
  res.send("hii");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
