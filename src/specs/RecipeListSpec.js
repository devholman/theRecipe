import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';
const testRecipes = [
  {
    id: 1,
    name: 'recipe 1',
    category: 'cat 1'
  },
  {
    id: 2,
    name: 'recipe 2',
    category: 'cat 2'
  },
  {
    id: 3,
    name: 'recipe 3',
    category: 'cat 3'
  }
];
describe('<RecipeList />', () => {
  test('should not break when no recipes are passed', () => {
    const component = renderer.create(<RecipeList />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render correctly', () => {
    const component = renderer.create(<RecipeList recipes={testRecipes} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render favorites', () => {
    const component = renderer.create(
      <RecipeList recipes={testRecipes} favorites={[1]} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
