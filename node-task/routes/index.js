const app = require("express");
const {
  getMovies,
  addMovies,
  getSingleMovie,
} = require("../controller/movies");
require("express-group-routes");

const router = app.Router();

router.group("/api/v1", (router) => {
  // get all movies
  router.get("/movies", getMovies);
  // get single movies
  router.post("/movie", getSingleMovie);
  // add movies
  router.post("/movies", addMovies);
  // add other routes also here ...
});

module.exports = router;
