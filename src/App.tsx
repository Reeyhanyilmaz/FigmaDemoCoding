import React from "react";
import "./App.css";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";
import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
