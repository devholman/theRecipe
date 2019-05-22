import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

describe('<RecipeDetail />', () => {
  let testRecipe;

  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Chocolate Cake',
      category: 'dessert',
      ingredients: ['ing 1, ing 2'],
      steps: ['step 1', 'step 2']
    };
  });
  test('should render zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should correctly render a recipe', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should correctly assign a className', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} className="classname-test" />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render without recipe steps', () => {
    delete testRecipe.ingredients;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render without recipe ingredients', () => {
    delete testRecipe.steps;
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} />
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
