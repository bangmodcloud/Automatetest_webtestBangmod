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
import 'cypress-file-upload';

const username = 'plapika03@gmail.com'
const password = '769461Pla-'

Cypress.Commands.add('pathKeypair', () => {
    cy.session(
      username,
      () => {
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/keypair')
        cy.get('a').click();
        cy.wait(1000)
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(`${password}{enter}`, { log: false })
    
        cy.get('.otp-field').eq(0).type('1');
        cy.get('.otp-field').eq(1).type('2');
        cy.get('.otp-field').eq(2).type('3');
        cy.get('.otp-field').eq(3).type('4');
        cy.get('.otp-field').eq(4).type('5');
        cy.get('.otp-field').eq(5).type('6');

        cy.wait(1000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/keypair')
      }
    )
  })

  Cypress.Commands.add('pathVolume', () => {
    cy.session(
      username,
      () => {
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
        cy.get('a').click();
        cy.wait(1000)
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(`${password}{enter}`, { log: false })
    
        cy.get('.otp-field').eq(0).type('1');
        cy.get('.otp-field').eq(1).type('2');
        cy.get('.otp-field').eq(2).type('3');
        cy.get('.otp-field').eq(3).type('4');
        cy.get('.otp-field').eq(4).type('5');
        cy.get('.otp-field').eq(5).type('6');

        cy.wait(1000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
      }
    )
  }),

  Cypress.Commands.add('pathVolumeBackup', () => {
    cy.session(
      username,
      () => {
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume-backup')
        cy.get('a').click();
        cy.wait(1000)
        cy.get('input[name=username]').type(username)
        cy.get('input[name=password]').type(`${password}{enter}`, { log: false })
    
        cy.get('.otp-field').eq(0).type('1');
        cy.get('.otp-field').eq(1).type('2');
        cy.get('.otp-field').eq(2).type('3');
        cy.get('.otp-field').eq(3).type('4');
        cy.get('.otp-field').eq(4).type('5');
        cy.get('.otp-field').eq(5).type('6');

        cy.wait(1000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume-backup')
      }
    )
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

