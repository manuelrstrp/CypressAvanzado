/// <reference types="cypress" />

let texto

describe('Seguridad', function(){

  it('Navegar entre diferentes dominios', function(){
    cy.visit('/')
    cy.visit('https://todo-cypress-iota.vercel.app')
    cy.get('#title').type('Titulo de prueba')
  })
  it('Navego a un dominio', function(){
    cy.visit('https://todo-cypress-iota.vercel.app')
    cy.get('h1').invoke('text').as('titulo')
  })
  it('Navego a otro dominio', function(){
    cy.visit('/')
    cy.log(this.titulo)
    // cy.get('h1').invoke('text').as('titulo')
  })
  it('Navego en dos dominios en el mismo test', function(){
    cy.visit('/')
    cy.get('h1').first().invoke('text').then(text =>{
      Cypress.env({
        textito:text,
      })
    })
    cy.log(Cypress.env('textito'))
    cy.origin('https://todo-cypress-iota.vercel.app', {args:{texto: 'hola'}},
      function({texto}){
        cy.visit('/')
        cy.log(texto)
        cy.log(Cypress.env())
      })
    cy.visit('/')
    cy.get('h1').first().invoke('text').should('be.eq',Cypress.env('textito'))
  })
  it.only('Compartir informacion sin usar session', function(){
    cy.visit('/')
    cy.get('h1').first().invoke('text').then(text =>{
      cy.task('guardar', {texto: text})
    })
  })
  it.only('Compartir informacion sin usar session 2', function(){
    cy.visit('https://todo-cypress-iota.vercel.app')
    cy.task('obtener', 'texto').then(valor =>{
      cy.get('#title').type(valor)
    })
  })
})