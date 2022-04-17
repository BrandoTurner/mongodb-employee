const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://m001-student:m001-basics@cluster0.g8dyb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");

  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

  const db = mongoose.connection;

  module.exports = db;