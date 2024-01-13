const express = require("express");
const connectDB = require("./connectMongo.js");
const router = require("./src/routes/index.js");
const app = express();

app.use(express.json());

connectDB();

app.use("/api", router);
app.listen(3000, () => {
  console.log("Server is running on port " + 3000);
});
