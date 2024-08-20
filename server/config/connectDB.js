const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongoDB = async () => {
    const mongoURI = process.env.MONGO_URI;
    try {
      await mongoose.connect(mongoURI);
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1); // Exit process with failure
    }
};

module.exports = connectToMongoDB;