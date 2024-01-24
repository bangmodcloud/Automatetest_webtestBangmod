describe('Version / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear();
        cy.get('[name="imageId"]').clear();
        cy.get('[name="remoteUser"]').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(1000);

    })

    it('Validation (Admin doesenter Image ID field incorrectly. The system display alert message “Please enter the correct information according to the format.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.get('[name="imageId"]').clear().type('1');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter the correct information according to the format.');

        cy.wait(1000);

    })

    it('Usabilities (Admin select radio “เพิ่ม Command Cloud Init เอง”. The system display text area “Cloud Init”.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.get('#addCommand').click(); //เพิ่ม Command Cloud Init เอง
        cy.get('#additional-config').should('be.visible');


        cy.wait(1000);

    })

    it('Validation (Admin click Back button.  The system display modal “Leave Site ?.”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.wait(500);
        cy.get('.back-to-main-page').click({ force: true });
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Leave Site ?')
            .wait(300)
            .contains('button', 'Leave')
            .click();

        cy.wait(1000);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Edit').click();
        cy.get('[name="name"]').clear().type('Windows 12');
        cy.get('[name="imageId"]').clear().type('0cac7f4c-c7c6-4280-83da-721a6c83c8aa');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})