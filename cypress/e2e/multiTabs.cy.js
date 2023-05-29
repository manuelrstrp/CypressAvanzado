/// <reference types="cypress" />

describe('Navegando entre diferentes tabs', function(){
  it('Visitar links que tengan el target _blank', function(){
    cy.visit('https://demoqa.com/links')
    cy.get('#simpleLink').click()
  })
  it.only('Abrir la pagina dentro de la misma ventana', function(){
    cy.visit('https://demoqa.com/links')
    cy.get('#simpleLink').invoke('removeAttr','target').click()

  })
})