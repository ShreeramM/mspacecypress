/// <reference types="Cypress" />

export class loginPage {

    signInButton() {
        return cy.get('.auth-login-form > .btn-primary',{timeout:2000})
    }

    cardTitle() {
        return cy.get('.card-title',{timeout:2000})
    }

    cardTitle() {
        return cy.get('.card-title',{timeout:2000})
    }

    errormsg() {
        return cy.get('.invalid-feedback > div',{timeout:2000})
    }

   }

export default new loginPage