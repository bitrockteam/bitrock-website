/// <reference types="Cypress" />

context('Location', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  });

  it('get <main> element', () => {
    // cy.visit('http://localhost:8080')
    cy.get('main');
    cy.get('.card').its('length').should('be.gt', 1);
  });

  it('quick check Discover page', () => {
    cy.get('header.main nav a').eq(0).click();
    cy.get('article h3').should('contain', 'Bitrock | Innovation delivered!');
  });

  it('quick check Academy page', () => {
    cy.get('header.main nav a').eq(1).click();
    cy.get('article h3').should('contain', 'Academy');
  });



});