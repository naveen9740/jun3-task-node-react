const express = require("express");
const cors = require("cors");
const app = express();
const indexRoute = require("./routes/index");
const connectDB = require("./helper/connectDB");
const errorMiddleware = require("./middleware/error");
require("dotenv").config();

// connect with mongoDB.
connectDB();
// add cors to avoid cors error
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);
app.use("/", indexRoute);

app.listen(process.env.port, () => {
  console.log(`app listening on port ${process.env.port}`);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});
