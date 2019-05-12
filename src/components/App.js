import React from 'react';
import Header from './Header';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

console.log(API_URL);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      currentRecipe: null
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ recipes: data });
      });
  }

  onClickRecipe = id => {
    console.log(id);
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          currentRecipe: data
        });
      });
  };
  render() {
    return (
      <div>
        <Header />
        <main style={{ display: 'flex' }}>
          <RecipeList
            recipes={this.state.recipes}
            onclick={this.onClickRecipe}
            style={{ flex: 3 }}
          />
          <RecipeDetail recipe={this.state.currentRecipe} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}
export default App;
