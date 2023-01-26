import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import CatDetails from "./pages/CatDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/breeds/:name" element={<CatDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
