import React, { useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Newsletter from "./pages/Newsletter";
import About from "./pages/About";

export interface Recipe {
  title: string;
  ingredients: string;
  temperature: string;
  time: string;
  instructions: string;
}

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/home" element={<Home recipes={recipes} />} />
        <Route path="/recipes" element={<Recipes recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;