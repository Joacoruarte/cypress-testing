/// <reference types="Cypress" />

describe('My First Test', () => {
  it('Prueba escribir un mail!', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')
  })
})