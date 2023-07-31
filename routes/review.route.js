const express = require('express');
const { reviewGetController, reviewPostController } = require('../Controller/review.controller');
const reviewRouter = express.Router()


reviewRouter.get('/', reviewGetController)
reviewRouter.post('/post', reviewPostController)

module.exports = reviewRouter;