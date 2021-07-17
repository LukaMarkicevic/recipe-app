import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipe from "./components/Recipe";

interface AppProps {}

const api_key = process.env.REACT_APP_API_KEY;
const api_id = process.env.REACT_APP_API_ID;

const App: React.FC<AppProps> = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const recipe_call = async (query: string) => {
    const result =
      await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${api_id}&app_key=${api_key}
`);
    const resultjson = await result.json();
    console.log(resultjson.hits);
    setRecipes(resultjson.hits);
  };

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeSearch = (e: any) => {
    e.preventDefault();
    setSearch(text);
    setText("");
  };

  useEffect(() => {
    if (search !== "") {
      recipe_call(search);
    }
    // console.log(recipe_call(search));
  }, [search]);

  return (
    <div className="App">
      <Header text={text} changeText={changeText} changeSearch={changeSearch} />
      <div className="inline-flex justify-evenly flex-wrap">
        {recipes.map((recipe: any) => (
          <Recipe
            name={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
