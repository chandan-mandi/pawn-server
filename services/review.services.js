const reviewSchema = require("../models/review.modele");

// post review
module.exports.reviewPostService = async(data) => {
  const reviewPost =await reviewSchema.insertMany(data);
  return reviewPost;
};

// get
module.exports.reviewGetService = async (email, currentPage) => {
  const perPage = parseInt(8);
  const offset = Math.ceil((currentPage - 1) * perPage);
  const filter = { $or: [{ email: email }] };
  const reviewPost = await reviewSchema
    .find(filter)
    .skip(offset)
    .limit(perPage)
    .exec();
  return reviewPost;
};
