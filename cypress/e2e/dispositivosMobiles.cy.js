/// <reference types="cypress" />

const dispositivos = [
  {viewport: 'macbook-15', type: 'desktop'},
  {viewport: 'ipad-2', type: 'mobile'},
  {viewport: [1280,720], type: 'desktop'},
  {viewport: [375,667], type: 'mobile'},
]

describe('Dispositivos Mobiles', function(){
  /* it('Usando el viewport', function(){
    cy.viewport(1280,720)
    cy.visit('/')
    cy.contains('Safari').should('exist')
  })
  it('Usando el viewport mobil', function(){
    cy.viewport(375,667)
    cy.visit('/')
    cy.contains('Safari').should('not.be.visible')
  })
  it('Usando el viewport desktop preset', function(){
    cy.viewport('macbook-15')
    cy.visit('/')
    cy.contains('Safari').should('exist')
  })
  it('Usando el viewport movil preset', function(){
    cy.viewport('iphone-6+')
    cy.visit('/')
    cy.contains('Safari').should('not.be.visible')
  }) */
  dispositivos.forEach(device => {
    it(`Prubea con el viewport ${device.viewport}`, function(){
      if(Cypress._.isArray(device.viewport)){
        cy.viewport(device.viewport[0],device.viewport[1])
      }else{
        cy.viewport(device.viewport)
      }
      cy.visit('/')
      if(device.type === 'desktop'){
        cy.contains('Safari').should('exist')
      }else{
        cy.contains('Safari').should('not.be.visible')
      }
    })
  })
})