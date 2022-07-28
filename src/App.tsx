import React from "react";
import "./App.css";
import Home from "./components/Home";
import ComingSoon from "./components/ComingSoon";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
