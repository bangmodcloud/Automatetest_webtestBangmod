describe('Create Distro', () => {
    const fileName = 'logo.png';
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Validation (Admin does not enter Textfield.  The system display alert messsage “ Please input data” )', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get("input[type=file]").attachFile("logo.png")
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);

    })

    it('Validation (Admin does not enter selectfield.  The system display alert messsage “ Please select data” )', () => {

        cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get("input[type=file]").attachFile("logo.png")
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please select data');
        cy.wait(700);

    })

    it('Validation (Admin does not Upload Logo.  The system display alert message “Please Upload Logo” )', () => {

        cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please Upload Logo');
        cy.wait(700);

    })

    it('Validation (Admin upload image file exceeds the specified size.  The system display alert message “Image size must be 100 x 100 pixels.” )', () => {

        cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get("input[type=file]").attachFile("logo2.png")
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Image size must be 100 x 100 pixels.');
        cy.wait(700);

    })

    it('Action success', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows');
        cy.get('[name="description"]').type('Test distro')
        cy.get("input[type=file]").attachFile("logo.png")
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })

    it('Validation (Admin check Support SSH Key.  The system create Distro that supports SSH keys.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-distro').click();
        cy.contains('Create Distro').click();
        cy.get('[name="distroName"]').type('Windows2');
        cy.get('[name="description"]').type('Test distro')
        cy.get("input[type=file]").attachFile("logo.png")
        cy.get('.ant-select-selector').click(); //Size Plan
        cy.get(':nth-child(1) > .ant-select-item-option-content').click();
        cy.get('#amount').type('30');
        cy.get('#enable-ssh').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);

    })
})