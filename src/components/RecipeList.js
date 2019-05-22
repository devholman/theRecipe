import React from 'react';
import propTypes from 'prop-types';
import Recipe from './RecipeListItem';

const RecipeList = ({ recipes, style, favorites, ...props }) => {
  const allRecipes = recipes.map(recipe => {
    return (
      <Recipe
        key={recipe.id}
        recipe={recipe}
        favorited={favorites.includes(recipe.id)}
        {...props}
      />
    );
  });
  return <ul className="list-reset">{allRecipes}</ul>;
};

RecipeList.propTypes = {
  recipes: propTypes.array,
  favorites: propTypes.array,
  style: propTypes.object
};

RecipeList.defaultProps = {
  recipes: [],
  favorites: []
};
export default RecipeList;
