describe('Manage Distro / Delete Distro', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('List Distro page', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.wait(1000);
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(10) > .BLACK-ICON > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Distro?')
                .contains('button', 'No')
                .click();
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.wait(1000);
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(10) > .BLACK-ICON > .btn').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Distro?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })

    context('Manage Distro', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click(); 
            cy.get('#cloud-distro').click();
            cy.wait(1000);
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Distro?')
                .contains('button', 'No')
                .click()
            cy.wait(700);
        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.wait(1000);
            cy.get(':nth-child(3) > .px-0').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.contains('Delete').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Delete Distro?')
                .contains('button', 'Yes')
                .click()
            cy.wait(700);
        })
    })
})