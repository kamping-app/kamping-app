context('Assertions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('UI', () => {
    it('Logo', () => {
      cy.get('img')
        .should('have.attr', 'src')
        .should('include', 'kamping-logo')
    })
  })

  describe('SEO', () => {
    it('Alt Images', () => {
      cy.get('img').each($el => {
        cy.wrap($el).should('have.attr', 'alt')
      })
    })
  })
})
