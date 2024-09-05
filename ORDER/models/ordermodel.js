const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  restaurant: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deliveryAt: {
    type: Date,
    default: function () {
      const now = new Date();
      return new Date(now.getTime() + 2 * 60 * 60 * 1000);
    },
  },
});

module.exports = mongoose.model("Food", FoodSchema);
