const express = require("express");
const db = require("./config/db");
const UserRoutes = require("./routes/Userroutes");
const app = express();

app.use(express.json());
//app.use(express.urlencoded({}));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", UserRoutes);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
