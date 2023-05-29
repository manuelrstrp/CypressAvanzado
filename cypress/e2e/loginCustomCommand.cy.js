/// <reference types="cypress" />

describe('Login con custom commands', function(){
  it('login erroneo', function(){
    cy.login('lalalala','lalalalala')
  })
  it('login exitoso', function(){
    cy.login('username','password')
  })
})