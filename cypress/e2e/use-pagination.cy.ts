describe('Visit Marvel Comics', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate into pages', async () => {
    cy.get('[data-testid="pagination-button-next-page"]').click();
    cy.get('[data-testid="pagination-button-next-page"]').click();
    cy.get('li').first().click();
    cy.get('[data-testid="pagination-button-next-page"]').click();
    cy.get('[data-testid="pagination-button-previous-page"]').click();
  });
});
