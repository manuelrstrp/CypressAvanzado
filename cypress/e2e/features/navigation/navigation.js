const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { loginPage } = require("../../../pageObjects/LoginPage");
const { homePage } = require("../../../pageObjects/HomePage");

Given('I am on the home page', ()=>{
  loginPage.validateSuccessLogin()
})

When('I click on the Account Activity Nav', ()=>{
  homePage.goAccountActivity()
})

Then('I should see the Account Activity content', ()=>{
  homePage.validateAccountActivity()
  loginPage.logout()
})