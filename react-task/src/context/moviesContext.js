import { createContext, useContext, useState } from "react";

const Context = createContext();

export let MoviesContext = ({ children }) => {
  let [movies, setMovies] = useState([]);
  return (
    <Context.Provider value={{ movies, setMovies }}>
      {children}
    </Context.Provider>
  );
};
export let useMovies = () => useContext(Context);
