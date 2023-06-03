import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleMovie } from "../../services/api";

export const SinglePage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [singleMovie, setSingleMovie] = useState([]);

  const handleSingleMovie = async () => {
    const movie = await getSingleMovie(params.title);
    setSingleMovie(movie.movie);
  };
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <button onClick={handleSingleMovie}>Click Here to Get Info</button>
      {singleMovie && (
        <>
          <h1>{singleMovie.title}</h1>
          <h1>{singleMovie.year}</h1>
          <h5>..... some dummy info</h5>
        </>
      )}

      <div
        class="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      ></div>
      <button onClick={handleGoBack}>goback</button>
    </>
  );
};
