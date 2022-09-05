describe('Visit Marvel Comics Catalog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should favorite and filter a comic', async () => {
    cy.get('[data-testid="home-search-form-input"]').type('spider');
    cy.get('[data-testid="home-search-form-button"]')
      .should('contain.text', 'Search')
      .click();
  });
});
