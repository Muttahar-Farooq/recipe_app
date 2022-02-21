import react from "react";
import "./App.css";
import Recipe from "./Recipe";
import { useEffect, useState } from "react";

function App() {
  const APP_ID = "9e94848c";
  const APP_KEY = "f6a05d5f90230fe02b0c316a9e3a5e3c";

  const [search, setSearch] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [query, setQuery] = useState("chicken");

  const example_Request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
    console.log("Use effect triggered!");
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(example_Request);
    const data = await response.json();
    setRecipies(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipies">
        {recipies.map((recipe) => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            imageSrc={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
