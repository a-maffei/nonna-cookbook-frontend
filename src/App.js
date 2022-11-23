import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { client } from "./client";
import Starters from "./components/Starters";
import Pasta from "./components/Pasta";
import Dessert from "./components/Dessert";
import Footer from "./components/Footer";

function App() {
  const [recipes, setRecipes] = useState([]);

  // Data fetching

  function fetchRecipes() {
    client
      .getEntries()
      .then((res) => {
        console.log(res.items);
        setRecipes(res.items);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => fetchRecipes, []);

  // Arrays with recipe categories to pass as prop to the components (after routing)

  const starters = recipes.filter(
    (recipe) => recipe.fields.type === "starters"
  );
  console.log(starters);

  const pasta = recipes.filter((recipe) => recipe.fields.type === "pasta");
  console.log(pasta);

  const dessert = recipes.filter((recipe) => recipe.fields.type === "dessert");
  console.log(dessert);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
