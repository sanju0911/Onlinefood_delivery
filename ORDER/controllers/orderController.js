const food_order = require("../models/ordermodel");
const jwt = require("jsonwebtoken");

exports.order = async (req, res) => {
  const { itemName, price, restaurant } = req.body;
  const order = new food_order({
    itemName,
    price,
    restaurant,
  });
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("the user details are ", decoded);
    await order.save();
    res.status(201).json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};
