const express = require('express');
const { userPost, userGet } = require('../Controller/uesr.controller');
const userRouter = express.Router()

userRouter.get("/", userGet)
userRouter.post("/post", userPost)




module.exports= userRouter;