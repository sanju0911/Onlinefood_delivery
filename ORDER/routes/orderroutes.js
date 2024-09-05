const express = require("express");
const ordercontroller = require("../controllers/orderController");
const router = express.Router();

router.post("/order", ordercontroller.order);

module.exports = router;
