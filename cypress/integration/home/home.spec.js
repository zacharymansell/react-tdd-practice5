/* As a Chef, I want to be able to add recipes to my collection so that I may have a record of them.

Broken down:
<persona> : Chef.

Given I am on the landing page and there are no recipes, when the page loads, then I should see 'there are no recipes to list'.

Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.

As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes".

Given I have clicked the add recipe button, When I enter the details of a recipe in the form And I click the submit button Then I should see that recipe's name in the list under a heading that reads "My Recipes".

"As a chef, I want to be able to see multiple recipes' names appear as a list after adding them in the form".

*/

describe("Home page", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it("header contains recipe heading with a message that there are no recipes", () => {
    cy.get('.App-header').should('contain', 'My Recipes')
    cy.get('p').should('contain', 'There are no recipes to list.')
  })

  it("contains an add recipe button that when clicked opens a form", () => {
    const addRecipeButton = cy.get('#add-recipe');
    addRecipeButton.click();

    expect(cy.get('#recipe-form')).to.exist;
  })

  it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
    const addRecipeButton = cy.get('#add-recipe');
    addRecipeButton.click();

    expect(cy.get('input[name="newRecipeName"]')).to.exist;
    expect(cy.get('textarea[name="newRecipeInstructions"]')).to.exist;
  })

  it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
    const addRecipeButton = cy.get('#add-recipe');
    const instructions = '1. Two slices of bread. 2. Spread peanut butter and jelly on one side. 3. Fold over on itself + throw other piece of bread away. 4. Eat.';
    const recipeName = 'PB&J';

    addRecipeButton.click().then(() => {
      cy.get('input[name="newRecipeName"]').type(recipeName, { delay: 200 });
      cy.get('textarea[name="newRecipeInstructions"]').type(instructions, { delay: 200 });
    })
    cy.get('input[type=submit]').click();
    cy.get('ul').then(() => {
      cy.get('ul').contains(recipeName);
    })
  })
})