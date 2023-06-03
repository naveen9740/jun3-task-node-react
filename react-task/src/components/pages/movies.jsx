import { addMovies, getMovies } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./navbar";
import { useMovies } from "../../context/moviesContext";

export const Movies = () => {
  const navigate = useNavigate();
  const { movies, setMovies } = useMovies();
  const [moviesAdded, setMoviesAdded] = useState(false);
  const [showMoviesBtn, setShowMoviesBtn] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleAddMovies = async () => {
    setLoader(true);
    await addMovies();
    setMoviesAdded(true);
    setShowMoviesBtn(true);
    setLoader(false);
  };

  const handleGetMovies = async () => {
    setLoader(true);
    const { movies } = await getMovies();
    setMovies(movies);
    setShowMoviesBtn(true);
    setLoader(false);
  };

  const handleSinglePage = (title) => {
    navigate(`/single-page/${title}`);
  };

  return (
    <>
      <Navbar />
      {showMoviesBtn ? (
        <button
          href="#"
          class="btn btn-primary"
          onClick={handleGetMovies}
          disabled={loader}
        >
          Get Movies
        </button>
      ) : (
        <button
          href="#"
          class="btn btn-primary"
          onClick={handleAddMovies}
          disabled={loader}
        >
          Click Here to Add Movies
        </button>
      )}
      {loader && (
        <div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
      <div class="movies-container">
        {movies.length ? (
          movies.map(({ thumbnail, title, year }) => {
            return (
              <>
                <div class="card ml-2 mr-2" style={{ width: "18rem" }}>
                  <img src={thumbnail} class="card-img-top" alt="movie" />
                  <div class="card-body">
                    <h5 class="card-title">Title: {title}</h5>
                    <h5 class="card-title">Released Year: {year}</h5>
                    <button
                      class="btn btn-primary"
                      onClick={() => handleSinglePage(title)}
                    >
                      Get More Info
                    </button>
                  </div>
                </div>
              </>
            );
          })
        ) : moviesAdded ? (
          <h1>Movies Added To DB.</h1>
        ) : (
          <h1>No Movies Added Yet</h1>
        )}
      </div>
      {}
    </>
  );
};
