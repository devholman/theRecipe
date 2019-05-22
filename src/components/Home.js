import React from 'react';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { recipes, favorites, currentRecipe } = this.props.state;
    return (
      <div>
        <main className="px4 flex">
          <div style={{ flex: 3 }}>
            <h2>Recipes</h2>
            <RecipeList
              recipes={recipes}
              onclick={this.props.onClickRecipe}
              favorites={favorites}
              onFavorites={this.props.toggleFavorite}
            />
          </div>

          <RecipeDetail
            className="ml4 bg-white"
            recipe={currentRecipe}
            style={{ flex: 5 }}
            showLearnMore={true}
          />
        </main>
      </div>
    );
  }
}
export default Home;
