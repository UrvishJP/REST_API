const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
  res.send("I am live");
});

// middleware
app.use("/api/products", products_routes)

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Connected at PORT:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
