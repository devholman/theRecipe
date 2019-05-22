import React from 'react';
import RecipeList from './RecipeList';

const Favorites = ({ state, toggleFavorite, onClickRecipe }) => (
  <div className="px4">
    <h2 className="h2">Favorites</h2>
    <RecipeList
      recipes={state.recipes.filter(f => state.favorites.includes(f.id))}
      favorites={state.favorites}
      onFavorites={toggleFavorite}
      isFav={true}
    />
  </div>
);
export default Favorites;
