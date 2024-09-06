const food_order = require("../models/ordermodel");
const your_orers = require("../models/yourorders");
const Cart = require("../models/cart");
const jwt = require("jsonwebtoken");

exports.order = async (req, res) => {
  const { items } = req.body; // Expect items as an array

  if (!items || items.length === 0) {
    return res.status(400).json({
      success: false,
      error: "No items provided",
    });
  }

  try {
    // Use an array to accumulate the saved orders
    const savedOrders = await Promise.all(
      items.map(async (item) => {
        const { name: itemName, price, restaurant } = item;
        const order = new food_order({ itemName, price, restaurant });
        await order.save();
        return order; // Return the saved order
      })
    );

    // Send a single response after all orders are saved
    res.status(201).json({
      success: true,
      message: "Orders placed successfully",
      orders: savedOrders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

exports.yourorders = async (req, res) => {
  const { email, itemName, restaurant, price, createdAt, deliveryAt } =
    req.body;

  const order = new your_orders({
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

exports.yourorderslist = async (req, res) => {
  try {
    const orders = await food_order.find();

    if (orders.length === 0) {
      return res.status(200).json({ message: "No items in the list" });
    }
    return res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

exports.cart = async (req, res) => {
  const { items } = req.body; // Expect items as an array

  if (!items || items.length === 0) {
    return res.status(400).json({
      success: false,
      error: "No items provided",
    });
  }

  try {
    const cartItems = [];
    const errors = [];

    for (const item of items) {
      const { name: itemName, restaurant, price } = item;

      // Check if item already exists in the cart
      const existingCartItem = await Cart.findOne({ itemName });

      if (existingCartItem) {
        errors.push(`Item ${itemName} is already in the cart`);
        return res.json({ message: " item is already in the cart" });
      }

      // Add new item to the cart
      const newCartItem = new Cart({
        itemName,
        restaurant,
        price,
      });

      await newCartItem.save();
      cartItems.push(newCartItem);
    }

    if (cartItems.length === 0 && errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "No items were added to the cart.",
        errors,
      });
    }

    res.status(201).json({
      success: true,
      message: "Items added to the cart.",
      addedItems: cartItems,
      errors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.cartlist = async (req, res) => {
  try {
    const cartItems = await Cart.find();

    if (!cartItems) {
      return res.status(400).json({ message: "no items in the list" });
    }

    return res.status(200).json({ cartItems });
  } catch (error) {
    return res.status(400).json({ error });
  }
};
