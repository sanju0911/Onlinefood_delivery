const express = require("express");
const UserController = require("../controllers/Usercontroller");
const router = express.Router();

router.post("/register", UserController.register);

router.get("/login", UserController.login);

router.get("/forgetPassword", UserController.forgetPassword);

module.exports = router;
