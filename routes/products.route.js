const express = require("express");
const { postProducts, productGetWithId, products } = require("../Controller/Product.controller");

const categoryS = express.Router();

categoryS.get("/", productGetWithId);
categoryS.get("/get", products);
categoryS.post("/post", postProducts);

module.exports = categoryS;
