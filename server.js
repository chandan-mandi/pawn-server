const dotenv = require("dotenv").config();

const app = require("./app");
const dbConnect = require("./index");

// Database connection
dbConnect();

const port = process.env.PORT || 8080;
// Server

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
