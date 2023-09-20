import React, {useState, useEffect} from "react";
import Recipe from "../Recipe/Recipe";
import "../Recipes/Recipes.css"

export default function Recipes({ query }) {
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0d4a8f05";
  const APP_KEY = "72bb8b9ac182931cb1d86173b57a144f";

  useEffect(() => {
    getRecipes();
  }, [query]);
  //это обновление данных 

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&colories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipes(data.hits);
    //массив объектов, который содержит информацию о рецептах
  };
  
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
}
