describe('Manage Distro / Edit Distro Information', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usibilities (The system set Size Plan and Support SSH Key = Disabled.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(1000);
        cy.get('[name="sizePlanId"]').should('be.disabled');
        cy.get('#enable-ssh').should('be.disabled');


        cy.wait(700);

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
            cy.wait(1000);
            cy.contains('Edit').click();
            cy.wait(700);
            cy.get('[name="name"]').clear();
            cy.get('#amount').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);

        })

    it('Validation (Admin does not Upload Logo.  The system display alert message “Please Upload Logo” )', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
            cy.wait(1000);
            cy.contains('Edit').click();
            cy.wait(700);
            cy.get('.img-banner > .fas').click({force: true});
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please Upload Logo');

            cy.wait(700);

        })


    it('Validation (Admin click Cancel button.  The system display modal “Leave Site ?.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(700);
        cy.contains('Cancel').click({force: true});
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(300)
            .contains('button', 'Leave')
            .click();


        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(700);
        cy.get('[name="name"]').clear().type('Linux');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})