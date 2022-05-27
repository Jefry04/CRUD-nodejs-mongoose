const mongoose = require("mongoose");

function connect() {
  mongoose.connect("mongodb://localhost:27017/user", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("conected to db");
  });

  mongoose.connection.on("error", (err) => {
    console.log("conection db error", err);
  });

  return mongoose.connection;
}

module.exports = { connect };
