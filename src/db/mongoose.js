const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://app:app@cluster0.rxwup.mongodb.net/safeminer?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  }
);

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
