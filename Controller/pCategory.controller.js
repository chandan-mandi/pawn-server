const { getallCategoryProduct, postCategoryProduct } = require("../services/pCategory.services");

// get products
module.exports.categoryProductGet = async (req, res, next) => {
  const result = await getallCategoryProduct();
  res.send(result);
};
// category products post
module.exports.categoryProductPost = async (req, res, next) => {
  const data = req.body;
  const result = await postCategoryProduct(data);
  if(result){
    res.status(299).send({
      message:"successfully post data"
    });
  }
  next()
};
