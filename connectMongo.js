const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://root:123@cluster0.pnvccqv.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("Connect failed " + error.message);
  }
};

module.exports= connectDB;
