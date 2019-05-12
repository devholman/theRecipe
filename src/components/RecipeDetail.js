import React from 'react';

const RecipeDetail = props => {
  // const { name, image, ingredients, steps, category, calories } = props.recipe;
  if (!props.recipe) {
    return <p style={props.style}>Select recipe from list to see details.</p>;
  }
  return (
    <div style={props.style}>
      <h2>The Deats</h2>
      <img src={props.recipe.image} style={{ width: '50%' }} />
      <div>
        <span>{props.recipe.category}</span>
        <span>{props.recipe.calories}</span>
      </div>
      <h3>{props.recipe.ingredients}</h3>
      <ul>
        {props.recipe.ingredients.map(ingredient => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
      <h3>Steps</h3>
      <ol>
        {props.recipe.steps.map(step => {
          return <li key={step}>{step}</li>;
        })}
      </ol>
    </div>
  );
};
export default RecipeDetail;
