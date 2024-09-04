const express = require("express");
const UserController = require("../controllers/Usercontroller");
const router = express.Router();

router.post("/register", UserController.register);

module.exports = router;
