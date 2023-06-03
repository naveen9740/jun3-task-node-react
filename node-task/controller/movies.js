const mongoose = require("mongoose");
const moviesList = require("../movies.js");
const moviesModel = require("../models/movies.model");

// add movies to db
const addMovies = async (req, res) => {
  try {
    moviesList.map(async (movie) => {
      const newMovie = new moviesModel(movie);
      const moviesAdded = await newMovie.save();
      if (moviesAdded) {
        res.status(200).json({ message: "Movies Added Successfully" });
      } else {
        res.status(400).json({ message: "error" });
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};
// get movies from db
const getMovies = async (req, res) => {
  const movies = await moviesModel.find();
  res
    .status(200)
    .json({ message: "Movies Retrieved", movies, length: movies.length });
};

// get single movie from db using title
const getSingleMovie = async (req, res) => {
  const movie = await moviesModel.findOne({ title: req.body.title });
  res.status(200).json({ message: "Movies Retrieved", movie });
};

module.exports = { addMovies, getMovies, getSingleMovie };
