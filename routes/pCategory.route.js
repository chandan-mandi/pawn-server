const express = require("express");
const { categoryProductGet, categoryProductPost } = require("../controller/pCategory.controller");


const categoryRoute = express.Router();

categoryRoute.get("/", categoryProductGet);
categoryRoute.post("/post", categoryProductPost);

module.exports = categoryRoute;
