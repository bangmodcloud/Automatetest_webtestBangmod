describe('Create Size', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    // it('Usabilities (The system setfield Price International Transfer In (Price / 1 GB) / \
    //     Price International Transfer OUT (Price / 1 GB) / Price Domestic Transfer In (Price / \
    //     1 GB) and Price Domestic Transfer OUT (Price / 1 GB) = Disabled.)', () => {

    //     cy.get('#cloud-server-collapse').click();
    //     cy.get('#cloud-instance-collapse').click();
    //     cy.get('#cloud-size-plan').click();
    //     cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
    //     cy.wait(1000);
    //     cy.contains('Create Size').click();

    //     cy.get(':nth-child(3) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer In (Price / 1 GB)
    //     cy.get(':nth-child(4) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price International Transfer OUT (Price / 1 GB)
    //     cy.get(':nth-child(5) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); // Price Domestic Transfer In (Price / 1 GB)
    //     cy.get(':nth-child(6) > :nth-child(1) > .form-group > .input-group > #amount').should('be.disabled'); //Price Domestic Transfer OUT (Price / 1 GB)
    //     cy.wait(700);


    // })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Create Size').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);


    })


    it('Validation (Admin entered the Flavor ID incorrectly according to the format.  The system display alert messsage “Please enter the correct information according to the format.” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Create Size').click();
        cy.get(':nth-child(3) > .input-group > #amount').type('10'); // Price (THB/Month)
        cy.get('.row.mt-3 > :nth-child(1) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(2) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('.px-0 > .form-control').type('a') // Flavor ID
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter the correct information according to the format.');
        cy.wait(700);


    })

    it('Validation (Admin click Cancel button. The system display modal “Are you sure to leave information updating?”)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Create Size').click();
        cy.wait(300);
        cy.contains('Cancel').click({force: true});
        cy.get('.modal-content')
            .should('be.visible')
            .and('contain', 'Are you sure to leave information updating?')
            .wait(300)
            .contains('button', 'Yes')
            .click();
        cy.wait(700);


    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-size-plan').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
        cy.wait(1000);
        cy.contains('Create Size').click();
        cy.get(':nth-child(3) > .input-group > #amount').type('10'); // Price (THB/Month)
        cy.get('.row.mt-3 > :nth-child(1) > .input-group > #amount').type('1024'); // Ram (MB)
        cy.get(':nth-child(2) > .input-group > #amount').type('3'); // CPU (Core)
        cy.get('.px-0 > .form-control').type('aee4784f-2c1b-475d-afaa-1c8406e5419a') // Flavor ID
        cy.get('[type="submit"]').click();
        cy.wait(700);


    })
})