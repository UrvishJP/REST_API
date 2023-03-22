const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("I am live");
});

// middleware
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Connected at PORT:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
