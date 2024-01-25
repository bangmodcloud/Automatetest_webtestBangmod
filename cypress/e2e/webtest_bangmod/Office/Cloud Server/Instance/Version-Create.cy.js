describe('Create Version', () => {
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
        cy.contains('Create Version').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(1000);

    })

    it('Usabilities (Admin select radio “เพิ่ม Command Cloud Init เอง”. The system display text area “Cloud Init”.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.contains('Create Version').click();
        cy.get('[name="name"]').type('Windows 11');
        cy.get('[name="description"]').type('test create version');
        cy.get('[name="imageId"]').type('2d9bb53f-70ea-4066-a68b-67960eaae673');
        cy.get('[name="remoteUser"]').type('centos');
        cy.get('.mt-3 > :nth-child(2) > input').click(); //เพิ่ม Command Cloud Init เอง
        cy.get('#additional-config').should('be.visible');


        cy.wait(1000);

    })

    it('Validation (Admin click Cancel button.  The system closed Edit.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
        cy.wait(1000);
        cy.contains('Create Version').click();
        cy.wait(300);
        cy.contains('Cancel').click();

        cy.wait(1000);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({ force: true });
            cy.wait(1000);
        cy.contains('Create Version').click();
        cy.get('[name="name"]').type('Windows 11');
        cy.get('[name="description"]').type('test create version');
        cy.get('[name="imageId"]').type('2d9bb53f-70ea-4066-a68b-67960eaae673');
        cy.get('[name="remoteUser"]').type('centos');
        cy.get('[type="submit"]').click();

        cy.wait(700);

    })
})