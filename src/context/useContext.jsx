import { createContext, useState, useContext } from "react";

const FavoriteContext = createContext();
export const useFavoriteContext = () => useContext(FavoriteContext);

const FavoriteContextProvider = ({ children }) => {
  const [listaDeFavoritos, setListaDeFavoritos] = useState([]);

  const addMovie = (movie) => {
    const findMovie = listaDeFavoritos.find((movie1) => movie1.id === movie.id);
    if (!findMovie) {
      setListaDeFavoritos([...listaDeFavoritos, movie]);
    }
  };

  const cleanMovies = () => setListaDeFavoritos([]);

  const removeMovie = (id) => {
    const filterToDelete = listaDeFavoritos.filter((movie) => movie.id !== id);
    setListaDeFavoritos(filterToDelete);
  };
  return (
    <FavoriteContext.Provider
      value={{ listaDeFavoritos, addMovie, cleanMovies, removeMovie }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
