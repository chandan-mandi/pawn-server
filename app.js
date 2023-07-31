const express = require("express");
const app = express();
const cors = require("cors");
const productRoute = require("./routes/products.route");
const categoryRoute = require("./routes/pCategory.route");
const userRouter = require("./routes/user.router");
const reviewRouter = require("./routes/review.route");

// Middleware
app.use(express.json());
app.use(cors());

// make router apis
// app.use("/api/v1/product", productRoute);
// app.use("/api/v1/category", categoryRoute);
// app.use("/api/v1/review", reviewRouter)
// app.use("/api/v1/user", userRouter)



app.get("/", (req, res) => {
  res.send("server is running");
});
app.all("*", (req, res) => {
  res.send("nothing");
});

module.exports = app;
