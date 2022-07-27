import { Box, Button, Heading, Image, VStack } from "@chakra-ui/react";

import { useFavoriteContext } from "../../context/useContext.jsx";

const ListaDeFavoritos = () => {
  const { listaDeFavoritos, cleanMovies, removeMovie } = useFavoriteContext();

  return (
    <>
      {!listaDeFavoritos.length ? (
        ""
      ) : (
        <Box>
          <Button onClick={() => cleanMovies()}>Empty the list</Button>
        </Box>
      )}
      {!listaDeFavoritos.length ? (
        <Box>There's no favorite movies to show</Box>
      ) : (
        listaDeFavoritos.map((movie) => (
          <VStack key={movie.id}>
            <Image w="250px" src={movie.img} alt={movie.name} />
            <Heading>{movie.name}</Heading>
            <Button onClick={() => removeMovie(movie.id)}>
              Remove from favorites
            </Button>
          </VStack>
        ))
      )}
    </>
  );
};

export { ListaDeFavoritos };
