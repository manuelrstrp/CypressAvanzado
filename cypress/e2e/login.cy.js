/// <reference types="cypress" />

import { loginPage } from "../pageObjects/LoginPage"

describe('login con POM', function(){
  beforeEach(()=>{
    loginPage.visit()
  })
  it('login erroneo', function(){
    loginPage.validateLoginPage()
    loginPage.login('lalala','lalala')
    loginPage.validateErrorLogin()
  })
  it('login exitoso con cy.env', function(){
    loginPage.validateLoginPage()
    cy.log(Cypress.env())
    loginPage.login(Cypress.env('credentials').user,Cypress.env('credentials').password)
    loginPage.validateSuccessLogin()
  })
  it('login exitoso con cy.JSON', function(){
    loginPage.validateLoginPage()
    cy.log(Cypress.env())
    loginPage.login(Cypress.env('credentials').user,Cypress.env('credentials').password)
    loginPage.validateErrorLogin()
  })
  it('login erroneo desde la terminal', function(){
    loginPage.validateLoginPage()
    cy.log(Cypress.env())
    loginPage.login(Cypress.env('credentials').user,Cypress.env('credentials').password)
    loginPage.validateErrorLogin()
  })
})

describe('Login erroneo con configuración', {
  env:{
    usuarioErroneo: 'error1',
    passwordErroneo: 'error2'
  }
},function(){
  beforeEach(()=>{
    loginPage.visit()
  })
  it('Login erroneo', function(){
    loginPage.validateLoginPage()
    cy.log(Cypress.env())
    loginPage.login(Cypress.env('usuarioErroneo'),Cypress.env('passwordErroneo'))
    loginPage.validateErrorLogin()
  })
})

describe('Login con fixtures', function(){
  beforeEach(()=>{
    loginPage.visit()
  })
  it('Login erroneo', function(){
    loginPage.validateLoginPage()
    cy.fixture('credentials').then(credentials =>{
      loginPage.login(credentials.email,credentials.password)
    })
    loginPage.validateErrorLogin()
  })
  it('Login erroneo 2', function(){
    loginPage.validateLoginPage()
    cy.fixture('usuarios').then(credentials =>{
      loginPage.login(credentials.email,credentials.password)
    })
    loginPage.validateErrorLogin()
  })
})

const credentialsForUsers = [
  {
    nombre: "credentials",
    titulo: "Login con credentials"
  },
  {
    nombre: "usuarios",
    titulo: "Login con users"
  }
]
credentialsForUsers.forEach(credentials =>{
  describe.only(credentials.titulo, ()=>{
    beforeEach(()=>{
      loginPage.visit()
    })
    it('Login erroneo con fixtures', function(){
      loginPage.validateLoginPage()
      cy.fixture(credentials.nombre).then(cred =>{
        loginPage.login(cred.email,cred.password)
      })
      loginPage.validateErrorLogin()
    })
    
  })
})