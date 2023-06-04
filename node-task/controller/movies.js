const mongoose = require("mongoose");
const moviesList = require("../movies.js");
const moviesModel = require("../models/movies.model");

// add movies to db
const addMovies = async (req, res) => {
  try {
    // insert all movies at once to db.
    await moviesModel.create(moviesList);
    return res.status(200).json({ message: "Movies Added Successfully" });
  } catch (error) {
    // handle error
    if (error.name === "ValidationError") {
      let errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(400).send(errors);
    } else {
      return res.status(400).send(error);
    }
  }
};
// get movies from db
const getMovies = async (req, res) => {
  try {
    const movies = await moviesModel.find();
    res
      .status(200)
      .json({ message: "Movies Retrieved", movies, length: movies.length });
  } catch (error) {
    return res.status(400).send(error);
  }
};

// get single movie from db using title
const getSingleMovie = async (req, res) => {
  try {
    const movie = await moviesModel.findOne({ title: req.body.title });
    res.status(200).json({ message: "Movies Retrieved", movie });
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { addMovies, getMovies, getSingleMovie };
