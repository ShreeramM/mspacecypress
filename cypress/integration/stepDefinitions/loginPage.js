import {Given, And, When, Then} from "cypress-cucumber-preprocessor/steps"
import loginPage from '../pages/loginPage'
import loginPageconstants from "../../Config/loginPageconstants";

Given('User launch the Mspace URL', async function (){
   // launch Amazon URL
   cy.visit(Cypress.config().baseUrl);
   
});

Then('Verify the title of the Page and Text on the page',async function (){
   // verify the title of the page
   cy.title().should('eq',loginPageconstants.title)
   loginPage.cardTitle().contains(loginPageconstants.cardtitle)
})

And('Verify the validations on login page',async function (){
   // verify validations of login page fields
   loginPage.signInButton().should('be.visible').click();
   loginPage.errormsg().contains(loginPageconstants.companyerror)
   loginPage.errormsg().contains(loginPageconstants.usernameerror)
   loginPage.errormsg().contains(loginPageconstants.passworderror)
   cy.wait(3000)
})


