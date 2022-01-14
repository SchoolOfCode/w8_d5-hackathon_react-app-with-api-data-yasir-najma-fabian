import React, { useState, useEffect } from "react";

function RecipeDisplay({ userInput }) {
  const [result, setResult] = useState([]);
  const APP_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${userInput}&app_id=cb115519&app_key=029920085fe687c10eb00b2ae67e0e06`;
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(APP_URL);
      const data = await response.json();
      setResult(data.hits);
      console.log(data.hits)
    };
    getData();
  }, [userInput]);
  return (
    <div>
      {result.map((item) => {
        return (
          <div key={`${item.recipe.url}`}>
            <h3>{item.recipe.label}</h3>
            <a href={`${item.recipe.url}`}>
              <img src={`${item.recipe.image}`} alt={`${item.recipe.label}`} />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeDisplay;
