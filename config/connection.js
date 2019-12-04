const mongoose = require("mongoose");
const { DATABASE_HOST, DATABASE_NAME } = require("./environment");
mongoose
  .connect(`${DATABASE_HOST}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Conected to database");
  })
  .catch(error => {
    console.log("There is Something wrong", error);
  });

const db = mongoose.connection;

module.exports = db;
