const express = require("express");
const { postProducts, productGetWithId, products } = require("../controller/product.controller");

const categoryS = express.Router();

// categoryS.get("/", productGet);
categoryS.get("/", products);
categoryS.post("/post", postProducts);

module.exports = categoryS;
