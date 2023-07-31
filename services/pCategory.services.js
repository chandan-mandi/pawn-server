const Products = require("../models/pCategory.modul")

module.exports.getallCategoryProduct = async () => {
    const products = await Products.find({});
    return products;
  };
  // post data
module.exports.postCategoryProduct = async (data) => {
    const category = await Products.insertMany(data);
    return category;
  };
  