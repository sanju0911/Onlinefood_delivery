const food_order = require("../models/ordermodel");
const your_orers = require("../models/yourorders");
const cart = require("../models/cart");
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

exports.yourorders = async (req, res) => {
  const { name, itemName, restaurant, price, createdAt, deliveryAt } = req.body;

  const order = new your_orders({
    name,
    itemName,
    restaurant,
    price,
    createdAt,
    deliveryAt,
  });

  try {
    const ordered = await order.save();
    res.status(201).json({
      success: true,
      ordered,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.cart = async (req, res) => {
  try {
    const { itemName, restaurant, price } = req.body;

    const existingCartItem = await Cart.findOne({ itemName });

    if (existingCartItem) {
      return res.status(400).json({ message: "Item is already in the cart" });
    }

    const newCartItem = new Cart({
      itemName,
      restaurant,
      price,
      user: userId,
    });

    await newCartItem.save();

    return res
      .status(201)
      .json({ message: "Item added to the cart", item: newCartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
