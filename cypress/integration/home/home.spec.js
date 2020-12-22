/* As a Chef, I want to be able to add recipes to my collection so that I may have a record of them.

Broken down:
<persona> : Chef.

Given I am on the landing page and there are no recipes, when the page loads, then I should see 'there are no recipes to list'.

Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath the "My Recipes" heading.

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
})