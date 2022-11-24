import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { client } from "./client";
import Starters from "./components/Starters";
import Pasta from "./components/Pasta";
import Dessert from "./components/Dessert";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Startersrecipe from "./components/Startersrecipe";
import Pastarecipe from "./components/Pastarecipe";
import Dessertsrecipe from "./components/Dessertsrecipe";
import ErrorPage from "./components/ErrorPage";

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
    <div
      className="App"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/cutlery-black-stone-table-with-vegetables-spices-food-background-top-view-rustic-style_187166-3961.jpg?w=2000)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/starters" element={<Starters starters={starters} />} />
        <Route path="/pasta" element={<Pasta pasta={pasta} />} />
        <Route path="/desserts" element={<Dessert dessert={dessert} />} />
        <Route
          path="/starters/:id"
          element={<Startersrecipe starters={starters} />}
        />
        <Route path="/pasta/:id" element={<Pastarecipe pasta={pasta} />} />
        <Route
          path="/desserts/:id"
          element={<Dessertsrecipe dessert={dessert} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
