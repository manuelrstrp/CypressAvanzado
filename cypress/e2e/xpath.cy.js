/// <reference types="cypress" />

describe('Trabajar con xpath', function(){
  it('Obtenerlo con un css selector', function(){
    cy.visit('/')
    cy.get('#root > div.container > div:nth-child(1) > div:nth-child(1) > div > center > div.card-header > h1').should('contain','Bulbasaur')
  })
  it('Obtenerlo con un xpath', function(){
    cy.visit('/')
    //cy.xpath('//h1[contains(text(),"Bulbasaur")]').should('contain','Bulbasaur')
    cy.contains('Bulbasaur').should('be.visible')
  })
})