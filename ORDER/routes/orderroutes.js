const express = require("express");
const ordercontroller = require("../controllers/orderController");
const complaintcontroller = require("../controllers/complaintcontroler");
const router = express.Router();

router.post("/order", ordercontroller.order);

router.post("/yourorders", ordercontroller.yourorders);

router.get("/yourorders", ordercontroller.yourorderslist);

router.post("/cart", ordercontroller.cart);

router.get("/cartlist", ordercontroller.cartlist);

router.post("/complaint", complaintcontroller.complaint);

module.exports = router;
