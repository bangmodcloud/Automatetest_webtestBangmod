describe('Manage Size Plan / Delete Size Plan', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('List Size Plan page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(5) > .ICON-TERTIARY > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Size Plan?')
                .contains('button', 'No')
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(5) > .ICON-TERTIARY > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Size Plan?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })

    context('Manage Size Plan', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click(); 
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Size Plan?')
                .contains('button', 'No')
                .click()
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Size Plan?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })
})