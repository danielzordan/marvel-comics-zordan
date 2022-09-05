describe('Visit Marvel Comics', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should favorite and filter a comic', async () => {
    cy.get('[data-testid="favorite-button"]').first().click();
    cy.get('[data-testid="home-favorite-filter-button"]')
      .should('contain.text', 'Favorite')
      .click();
    cy.get('[data-testid="favorite-button"]').first().click();
    cy.get('h2').should((elem) => {
      expect(elem.text()).to.equal('There is no items in list');
    });
  });

  it('should favorite comic in details page', async () => {
    cy.get('[data-testid="comic-item-content"]').first().click();

    cy.get('[data-testid="favorite-button"]').first().click();
  });
});
