const { mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    // mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://smallPaws:Y0qIzfnt1DnJQiix@smallpaws.jp1d1cq.mongodb.net/smallPawsDB?retryWrites=true&w=majority");
    // console.log("Database is Successfully Connected".bold.blue);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = dbConnect;