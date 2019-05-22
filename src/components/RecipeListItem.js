import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Recipe = ({
  recipe,
  onclick,
  onFavorites,
  favorited,
  isFav,
  ...props
}) => {
  const { name, category, id } = recipe;
  const fav = favorited ? '😀' : '🗃️';

  return isFav ? (
    <Link to={`/recipe/${id}`}>
      <li className="border-bottom border-bottom-dashed py2 pointer">
        <span
          className="mr1"
          role="img"
          aria-label="favorite"
          onClick={e => {
            e.stopPropagation();
            onFavorites(id);
          }}
        >
          {fav}
        </span>
        <span>{name}</span>
        <span>{category}</span>
      </li>
    </Link>
  ) : (
    <li
      className="border-bottom border-bottom-dashed py2 pointer"
      onClick={e => {
        e.stopPropagation();
        onclick(id);
      }}
    >
      <span
        className="mr1"
        role="img"
        aria-label="favorite"
        onClick={e => {
          e.stopPropagation();
          onFavorites(id);
        }}
      >
        {fav}
      </span>
      <span>{name}</span>
      <span>{category}</span>
    </li>
  );
};
Recipe.propTypes = {
  recipes: propTypes.array,
  style: propTypes.object,
  onclick: propTypes.func
};

Recipe.defaultProps = {
  recipe: {},
  isFav: false
};

export default Recipe;
