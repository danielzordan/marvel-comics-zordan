describe('Visit Marvel Comics Catalog', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should see home page in localhost', async () => {
    cy.url().should('eq', 'http://localhost:5173/');
  });
});
