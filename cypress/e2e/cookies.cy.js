/// <reference types="cypress" />
//import 'cypress-v10-preserve-cookie'
Cypress.Cookies.debug(true)

describe("Cookies", function(){
  before(()=>{
    //cy.clearCookies()
  })
  beforeEach(()=>{
    cy.session('login',()=>{
      cy.setCookie('nombre','Manuel')
    })
  })
  /*
  beforeEach(() => {
    cy.preserveCookieOnce('nombre')
  })
  afterEach(() => {
    cy.preserveCookieOnce('nombre')
  }) */

  it('Obtener cookies', function(){
    cy.visit("/")
    cy.getCookies().should("be.empty")
  })
  it('agregar una cookie', function(){
    //cy.setCookie('nombre', 'Manuel')
    cy.getCookies().should("have.length", 1)
  })
  it('Obtener una cookie en especifico', function(){
    //cy.setCookie('nombre', 'Manuel')
    cy.getCookie('nombre').should('have.a.property','value','Manuel')//Se crea una cookie para poder ejecutar esta linea, cypress por seguridad borra las cookies luego de cada IT
  })
})