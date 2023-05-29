export class HomePage{
  constructor(){
    this.title = ".offset2 > :nth-child(1)";
    this.accountActivity = "Account Activity"
    this.showTransactions = "Show Transactions"
  }

  validateHomePage(){
    cy.get(this.title).should('be.visible')
  }

  goAccountActivity(){
    cy.contains(this.accountActivity).click()
  }

  validateAccountActivity(){
    cy.contains(this.showTransactions).should('be.visible')
  }
}

export const homePage = new HomePage();