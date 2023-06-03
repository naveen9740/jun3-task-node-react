import axios from "axios";
// add movies api call
export const addMovies = async () => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/movies`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
// get movies api call
export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/movies`
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
// get single movie api call
export const getSingleMovie = async (title) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/movie`,
      { title }
    );
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
