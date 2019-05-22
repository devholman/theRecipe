import React from 'react';
import propTypes from 'prop-types';
//allows to pass many classnames as arguments. if classname is null, it won't render on screen.
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const RecipeDetail = props => {
  if (!props.recipe) {
    return (
      <p
        style={props.style}
        className={classNames('h3 italic center p2 bg-white', props.className)}
      >
        Select recipe from list to see details.
      </p>
    );
  }
  const {
    id,
    name,
    image,
    ingredients,
    steps,
    category,
    calories
  } = props.recipe;

  return (
    <div
      style={props.style}
      className={classNames('bg-white p2', props.className)}
    >
      <h2 className="h2">{name}</h2>
      <img src={image} className="fit max-width-2 " />
      <div>
        <span>{category}</span>
        <span>{calories}</span>
      </div>
      <h3>{ingredients}</h3>
      {ingredients && (
        <ul className="list-reset">
          {ingredients.map(ingredient => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
        </ul>
      )}
      <h3>Steps</h3>
      {steps && (
        <ol>
          {steps.map(step => {
            return <li key={step}>{step}</li>;
          })}
        </ol>
      )}
      {props.showLearnMore ? <Link to={`/recipe/${id}`}>See More</Link> : null}
    </div>
  );
};

RecipeDetail.propTypes = {
  style: propTypes.object,
  recipe: propTypes.object,
  className: propTypes.string,
  showLearnMore: propTypes.bool
};

RecipeDetail.defaultProps = {
  recipe: {}
};
export default RecipeDetail;
