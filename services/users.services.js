const userModel = require("../models/user.model");

module.exports.userPostService = async(data)=>{
    const user=await userModel.insertMany(data);
    return user
}
module.exports.userGetService = async(email)=>{
    const query ={email : email}
    const users=await userModel.find({query});
    return users
}