import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

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
import Form from "./components/Form";

function App() {
  const [recipes, setRecipes] = useState([]);

  //const url = "http://localhost:8060/api/recipes";
  const url = "https://cookbook-project.onrender.com/api/recipes";

  const getData = () => {
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setRecipes(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => getData, []);

  /*const getData = () => {
    fetch(url)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setRecipes(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => getData, []);*/

  /*  const getData = () => {
    fetch(url)
      .then((data) => data.text())
      .then((text) => {
        console.log(text);
        // process the text data here
      });
  }; */

  /* const getData = () => {
    fetch(url)
      .then((res) => console.log(res))
      .then((data) => {
        data.text();
        // process the text data here
      });
  }; */

  useEffect(() => getData(), []);

  // Arrays with recipe categories to pass as prop to the components (after routing)

  const starters = recipes?.filter((recipe) => recipe.type === "starters");
  console.log(starters);

  const pasta = recipes?.filter((recipe) => recipe.type === "pasta");
  console.log(pasta);

  const dessert = recipes?.filter((recipe) => recipe.type === "dessert");
  console.log(dessert);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage recipes={recipes} />} />
        <Route path="/starters" element={<Starters starters={starters} />} />
        <Route path="/pasta" element={<Pasta pasta={pasta} />} />
        <Route path="/dessert" element={<Dessert dessert={dessert} />} />
        <Route path="/form" element={<Form recipes={recipes} />} />
        <Route
          path="/starters/:id"
          element={<Startersrecipe starters={starters} />}
        />
        <Route path="/pasta/:id" element={<Pastarecipe pasta={pasta} />} />
        <Route
          path="/dessert/:id"
          element={<Dessertsrecipe dessert={dessert} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
