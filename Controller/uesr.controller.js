const {
  userPostService,
  userGetService,
} = require("../services/users.services");

module.exports.userPost = async (req, res, next) => {
  const data = req.body;
  const result = await userPostService(data);
  res.send({
    message: "successFully post user",
    post: result,
  });
};

module.exports.userGet = async (req, res, next) => {
  const email = req.query.email;
  result = await userGetService(email);

  res.send({
    length: result.length,
    data: result,
  });
};
