const Products = require("../models/product.model");
const { ObjectId } = require("mongodb");

// query on product
module.exports.getQueryProduct = async (price, category, id, currentPage) => {
  const perPage = parseInt(8);
  const offset = Math.ceil((currentPage-1) * perPage);
  const filter = {
    $or: [
      { _id: new ObjectId(id)},
      { category: category },
      { price: price },
    ],
  };
  const products = await Products.find(filter).skip(offset).limit(perPage).exec();
  return products;
};


module.exports.postProduct = async (data) => {
  const products = await Products.insertMany(data);
  return products;
};

// code by Chandan 
exports.getProducts = async (req, res, next) => {
  try {
      const products = await Products.find({});
      console.log('products', products);
      res.json({
          status: "success",
          data: products
      })
  } catch (error) {
      res.status(400).json({
          status: "failed",
          message: "Can't get the data",
          error: error.message
      })
  }
}