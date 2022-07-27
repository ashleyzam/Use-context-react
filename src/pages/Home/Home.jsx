import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useState } from "react";
import { movies } from "../../assets/movies";
import { useFavoriteContext } from "../../context/useContext";

const Home = () => {
  const [movies1, setMovies1] = useState(movies);
  const { addMovie } = useFavoriteContext();

  return (
    <>
      {movies1.map((movie) => (
        <Box flex="row" p="10" m="30px" key={movie.id}>
          <Image w="250px" src={movie.img} alt={movie.name} />
          <Heading fontSize="30px">{movie.name}</Heading>
          <Button onClick={() => addMovie(movie)}>Add to favorites</Button>
        </Box>
      ))}
    </>
  );
};

export { Home };
