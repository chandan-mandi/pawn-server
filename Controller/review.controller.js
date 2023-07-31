const { reviewPostService, reviewGetService } = require("../services/review.services");

module.exports.reviewPostController = async (req, res, next) => {
  const review = req.body;
  const result = await reviewPostService(review);
  res.send({
    length: result.length,
    data: {
      result,
    },
  });
};
// get 
module.exports.reviewGetController = async (req, res, next) => {
  const email = req.query.email;
  const currentPage  = parseInt(req.query.page) || 1
  const result = await reviewGetService(email,currentPage);
  res.send({
    length: result.length,
    data: {
      result,
    },
  });
};
