const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log(`Oops ${error}`);
  }
};

module.exports = connectDB;
