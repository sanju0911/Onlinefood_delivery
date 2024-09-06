const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  deliveryAt: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("YourOrder", orderSchema);
