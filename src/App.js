import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAddRecipeFormDisplayed: false,
    }
  }

  // toggleAddRecipeForm method
  toggleAddRecipeForm() {
    this.setState(
      { isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed }
    );
  }

  render() {
    const addNewRecipeForm = <form id="recipe-form">
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input type="text" name="newRecipeName" />
      <label htmlFor="newRecipeInstructions">Instructions: </label>
      <textarea name="newRecipeInstructions" placeholder="write recipe instructions here..." />
      <input type="submit" />
    </form>
    const addRecipeButton = <button id="add-recipe" onClick={this.toggleAddRecipeForm.bind(this)}>Add Recipe</button>

    return (
      <div className="App" >
        <header className="App-header">
          My Recipes
        </header>
        {
          this.state.isAddRecipeFormDisplayed
            ? addNewRecipeForm
            : addRecipeButton
        }
        <p>There are no recipes to list.</p>
      </div>
    );
  }
}

export default App;
