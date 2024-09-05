const mongoose = require("mongoose");
const dotenv = require("dotenv").config(); // Ensure dotenv is loaded

const connectDB = async () => {
  try {
    console.log(`Mongo URI: ${process.env.MONGO_URI}`); // Check if the URI is properly loaded

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
