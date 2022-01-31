const mongoose = require("mongoose");

module.exports = async function connection() {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb://admin:123456@localhost:27017/Colmeia?authSource=admin",
      connectionParams
    );
    console.log("connected to database on port 27017");
  } catch (error) {
    console.log(error);
    console.log("could not connect to database");
  }
};
