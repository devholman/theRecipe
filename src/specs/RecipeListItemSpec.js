import React from 'react';
//executes a full render on the component passed by args
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import RecipeListItem from '../components/RecipeListItem';

const testRecipe = {
  id: 1,
  name: 'Chocolate Cake',
  category: 'dessert'
};
describe('<RecipeListItem />', () => {
  test('should not break if no recipe is sent', () => {
    const component = renderer.create(<RecipeListItem />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render successfully', () => {
    const component = renderer.create(<RecipeListItem recipe={testRecipe} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render favorite state true', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} favorited={true} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
  test('should render favorite state false', () => {
    const component = renderer.create(
      <RecipeListItem recipe={testRecipe} favorited={false} />
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const component = mount(
      <RecipeListItem recipe={testRecipe} onclick={onClick} />
    );
    component.simulate('click');
    expect(onClick.mock.calls.length).toBe(1);
  });
  test('should call Favorited when clicked', () => {
    const onFavorites = jest.fn();
    const component = mount(
      <RecipeListItem recipe={testRecipe} onFavorites={onFavorites} />
    );
    component
      .find('span')
      .first()
      .simulate('click');
    expect(onFavorites.mock.calls.length).toBe(1);
  });
  test('should not call onClick when Favorited is called', () => {
    const onClick = jest.fn();
    const onFavorites = jest.fn();
    const component = mount(
      <RecipeListItem
        recipe={testRecipe}
        onclick={onClick}
        onFavorites={onFavorites}
      />
    );
    component
      .find('span')
      .first()
      .simulate('click');
    expect(onClick.mock.calls.length).toBe(0);
    expect(onFavorites.mock.calls.length).toBe(1);
  });
});
