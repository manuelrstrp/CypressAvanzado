/// <reference types="cypress" />

describe('Visual testing', function(){
  it('Mi primer prueba de regresion', function(){
    cy.visit('/')
    cy.wait(10000)
    cy.scrollTo('bottom')
    cy.matchImageSnapshot()
  })
  it('Segunda prueba a un solo elemento', function(){
    cy.visit('/')
    cy.contains('Bulbasaur').should('be.visible').matchImageSnapshot()
  })
})