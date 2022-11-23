import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { client } from "./client";

function App() {
  const [recipes, setRecipes] = useState([]);

  function fetchRecipes() {
    client
      .getEntries()
      .then((res) => {
        console.log(res.items.fields);
        setRecipes(res.fields);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => fetchRecipes, []);

  console.log(recipes);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
