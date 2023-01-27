import React from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import CatDetails from "./pages/CatDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.Node_ENV === "production") disableReactDevTools();

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/breeds/:name" element={<CatDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
