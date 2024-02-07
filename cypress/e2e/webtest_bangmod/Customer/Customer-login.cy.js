describe('Customer Login', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })

        cy.wait(1000)

        cy.intercept({
            url: 'https://web-test-bangmod.bangmod.cloud/',
            method: 'GET',
        }).as("User")


        cy.visit('https://web-test-bangmod.bangmod.cloud/')
    })

    it('Validation (User does not enter Username and Password. The system display alert message “Please input data”)', () => {


        cy.get('.btn').click();
        cy.get('#username-error').contains('Please input data')
        cy.get('#password-error').contains('Please input data')

    })

    it('Usabilities (User click “Sign up“ is a hyperlink. The system leads to Registration page.)', () => {


        cy.wait(500)
        cy.contains('Sign up').click();

    })


    it('Usabilities (User click “Sign in”  The system will perform two factor authentication. by sending a verification code to your email)', () => {

        cy.get('#username').type('pla01@gmail.com');
        cy.get('#password').type('769461Pla-');
        cy.get('.btn').click();
    })

    it('Validation  (User enters a code that does not match the code sent by the system. The system alert message “ Invalid verification code”)', () => {

        cy.get('#username').type('pla01@gmail.com');
        cy.get('#password').type('769461Pla-');
        cy.get('.btn').click();
        cy.wait(700)

        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('1');
        cy.get('.d-flex > :nth-child(3)').type('1');
        cy.get('.d-flex > :nth-child(4)').type('1');
        cy.get('.d-flex > :nth-child(5)').type('1');
        cy.get('.d-flex > :nth-child(6)').type('1');
        cy.get('.alert').contains('Invalid code. Please try again.')
        cy.wait(700)
    })

    it('Action success', () => {

        cy.get('#username').type('pla01@gmail.com');
        cy.get('#password').type('769461Pla-');
        cy.get('.btn').click();

        cy.wait(1000)
        cy.get('.d-flex > :nth-child(1)').eq(1).type('1');
        cy.get('.d-flex > :nth-child(2)').type('2');
        cy.get('.d-flex > :nth-child(3)').type('3');
        cy.get('.d-flex > :nth-child(4)').type('4');
        cy.get('.d-flex > :nth-child(5)').type('5');
        cy.get('.d-flex > :nth-child(6)').type('6');


    })

})