const mongoose = require("mongoose");
const { Schema } = mongoose;
// generate movie schema
const moviesSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title Must Be Required"],
    },
    year: {
      type: Number,
      required: [true, "Year Must Be Required"],
    },
    thumbnail: {
      type: String,
      required: [true, "thumbNail Must Be Required"],
    },
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);
const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;
