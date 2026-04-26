import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;