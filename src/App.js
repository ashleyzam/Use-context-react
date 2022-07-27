import { Box, VStack } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./pages/Home/Home.jsx";
import { ListaDeFavoritos } from "./pages/ListaDeFavoritos/ListaDeFavoritos.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <VStack w="100%" justifyContent="center" alignItems="center" wrap="wrap">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<ListaDeFavoritos />} />
      </Routes>
    </VStack>
  );
}

export default App;
