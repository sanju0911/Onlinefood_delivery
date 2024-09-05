const express = require("express");
const db = require("./config/db");

const orderroutes = require("./routes/orderroutes");

const app = express();
db();

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(express.json());

app.use("/", orderroutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
