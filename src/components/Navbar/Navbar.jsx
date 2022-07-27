import { Box, Link, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <VStack flex="row">
      <Link as={NavLink} to="/">
        Home
      </Link>
      <Link margin="none" as={NavLink} to="/favoritos">
        Lista de Favoritos
      </Link>
    </VStack>
  );
};

export { Navbar };
