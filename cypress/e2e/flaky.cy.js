/// <reference types="cypress" />

describe('Flaky test', function(){
  it('Single query command', function(){
    cy.visit('/')
    // cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1').should('contain','Bulbaaaasaur')
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1','Bulbaaaasaur')
  })
  it.only('alternar comando con asersiones', function(){
    cy.visit('/')
    //cy.get('#submit').click()
    //esto va a reintentar el cy.get hasta que la asercion pase
    //cy.get('#submit').should('not.to.be.disable').click()
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1')
      .should('contain','Bulbasaur')
      .parent()
      .should('have.class','card-header')
  })
})