describe('Visit Marvel Comics Catalog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should see comic details and go back to home', async () => {
    cy.get('[data-testid="comic-item-content"]').first().click();

    cy.get('[data-testid="comic-details-comeback-button"]').first().click();
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
