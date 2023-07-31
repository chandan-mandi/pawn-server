const express = require('express');
const { reviewGetController, reviewPostController } = require('../controller/review.controller');
const reviewRouter = express.Router()


reviewRouter.get('/', reviewGetController)
reviewRouter.post('/post', reviewPostController)

module.exports = reviewRouter;