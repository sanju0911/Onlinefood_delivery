const express = require("express");
const db = require("./config/db");

db();

const app = express();

const dotenv = require("dotenv").config();

const userRoutes = require("./routes/Userroutes");
const cors = require("cors");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("server is running on port 8000");
});
