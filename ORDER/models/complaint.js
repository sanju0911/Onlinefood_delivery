const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const ItemSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now, // Default to current date and time
  },
});

// Create the model
const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;
