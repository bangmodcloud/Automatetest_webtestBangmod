describe('Manage Distro /Change Status published,unpublished,inactive,active', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Chang Status to Unpublish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublished?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Unpublish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status unpublished?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Publish', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status published?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Publish').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status published?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })

    context('Chang Status to Inactive ', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status inactive ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Inactive').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status inactive ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })


    context('Chang Status to Active', () => {

        it('Usibirities (User click No. The system closed modal.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status active ?')
                .wait(300)
                .contains('button', 'No')
                .click();
            cy.wait(1000);

        })

        it('Action success', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
            cy.contains('Active').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm change to status active ?')
                .wait(300)
                .contains('button', 'Yes')
                .click();
            cy.wait(1000);

        })
    })


})