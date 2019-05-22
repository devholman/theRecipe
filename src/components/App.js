import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Recipe from './Recipe';
import Header from './Header';
import NotFound from './NotFound';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      favorites: [],
      currentRecipe: null
    };
  }
  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(data => {
        this.setState({ recipes: data });
      });
  }
  onClickRecipe = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentRecipe: data
        });
      });
  };
  otherClickRecipe = id => {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentRecipe: data
        });
      });
  };
  toggleFavorite = id => {
    this.setState(({ favorites, ...state }) => {
      if (favorites.includes(id)) {
        return {
          ...state,
          favorites: favorites.filter(f => f !== id)
        };
      }

      return { ...state, favorites: [...favorites, id] };
    });
  };
  render() {
    return (
      <BrowserRouter basename="/theRecipe">
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                  onClickRecipe={this.onClickRecipe}
                />
              )}
            />
            <Route
              path="/favorites"
              render={() => (
                <Favorites
                  state={this.state}
                  toggleFavorite={this.toggleFavorite}
                  onClickRecipe={this.onClickRecipe}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
