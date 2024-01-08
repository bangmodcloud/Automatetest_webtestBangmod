// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {

    cy.intercept({
        url: 'https://web-test.bangmod.cloud/auth/login',
        method: 'GET',
    }).as("User")

   
        cy.visit('https://web-test.bangmod.cloud/auth/login')
        cy.wait(700);
        cy.get('#username').type('PlaWaraporn');
        cy.get('#password').type('769461Pla-');
        cy.get('.btn').click();

    
        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');
        
    
  }),
  Cypress.Commands.add('loginOffice', () => {

    cy.intercept({
        url: 'https://office-test.bangmod.cloud/auth/login',
        method: 'GET',
    }).as("Admin")


    cy.visit('https://office-test-bangmod.bangmod.cloud/auth/login')
/
    cy.get('#username').type('admin@bangmod.cloud');
    cy.get('#password').type('Adminbangmod123@');
        cy.get('.btn').click();

    
        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');
        
    
  })

  Cypress.Commands.add('loginAdminrole', () => {

    cy.intercept({
        url: 'https://office-test.bangmod.cloud/auth/login',
        method: 'GET',
    }).as("Admin")


    cy.visit('https://office-test.bangmod.cloud/auth/login')
/
    cy.get('#username').type('adminrole@gmail.com');
    cy.get('#password').type('Qatest01-');
        cy.get('.btn').click();

    
        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');

})

Cypress.Commands.add('loginAdminReadOnly', () => {

    cy.intercept({
        url: 'https://office-test.bangmod.cloud/auth/login',
        method: 'GET',
    }).as("Admin")


    cy.visit('https://office-test.bangmod.cloud/auth/login')
/
    cy.get('#username').type('adminreadonly@gmail.com');
    cy.get('#password').type('Qatest01-');
        cy.get('.btn').click();


        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');

})