import React from 'react';

const Recipe = props => {
  const { name, category, id } = props.recipe;
  return (
    <li onClick={() => props.onclick(id)}>
      <span>{name}</span>
      <span>{category}</span>
    </li>
  );
};
const RecipeList = props => {
  const recipes = props.recipes.map(recipe => {
    return <Recipe key={recipe.id} onclick={props.onclick} recipe={recipe} />;
  });
  return (
    <div style={props.style}>
      <h2>Recipes</h2>
      <ul>{recipes}</ul>
    </div>
  );
};
export default RecipeList;
