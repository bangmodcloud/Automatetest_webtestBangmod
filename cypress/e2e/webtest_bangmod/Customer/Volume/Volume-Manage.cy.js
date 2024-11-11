describe('Volume / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
    })

    it('Usabilities (User go to Create Volume page. The system display :)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Volume');
            cy.get('.btn').contains('Attach to Instance').should('be.visible');
            cy.get('.dropdown').contains('Action').should('be.visible');
            cy.contains('Back').should('be.visible')
        })
        cy.contains('.card','General Information').within(() => {
            cy.get('.card-header').contains('General Information');
            cy.get('.btn').contains('Edit name and description').should('be.visible');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'Size').should('have.text', 'Size')
            cy.contains('label', 'Type').should('have.text', 'Type')
            cy.contains('label', 'Bootable').should('have.text', 'Bootable')

        })

        cy.contains('.card','Attached Instance').within(() => {
            cy.get('.card-header').contains('Attached Instance');
            cy.contains('label', 'Instance').should('include.text', 'Instance')
        })

        cy.contains('.card','Automatic Volume Backup').within(() => {
            cy.get('.card-header').contains('Automatic Volume Backup');
            cy.get('.ant-switch').should('be.visible');
            cy.get('.card-body').contains("Setting up system automatic backup when it comes to the time when the system has been set up, there will be a backup of the volume file automatically, system will backup files automatically. until you disable automatic volume backup.")
        })
    })

    it('Usabilities (User click Edit button. The system open to edit data)', () => {
        cy.get('tbody tr').eq(1)
                .find('td')
                .eq(1)
                .click();
            cy.wait(200)
        cy.get('.btn').contains('Edit name and description').click();
        cy.get('#edit-volume-form').should('be.visible')
        cy.wait(700)
    })

    it('Validation (User does not enter Name. The system displays an error message “ Please input data”)', () => {
        cy.get('tbody tr').eq(1)
                .find('td')
                .eq(1)
                .click();
            cy.wait(200)
        cy.get('.btn').contains('Edit name and description').click();
        cy.get('#name').clear();
        cy.get('.btn').contains('Save').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700)
    })

    it('Usabilities (User click Cancel button. The system close form edit volume)', () => {
        cy.get('tbody tr').eq(1)
                .find('td')
                .eq(1)
                .click();
            cy.wait(200)
        cy.get('.btn').contains('Edit name and description').click();
        cy.wait(200)
        cy.get('.btn').contains('Cancel').click();
        cy.wait(700)
    })

    it('Usabilities (User try edit volume. User edit data volume succeed.)', () => {
        cy.get('tbody tr').eq(1)
                .find('td')
                .eq(1)
                .click();
            cy.wait(200)
        cy.get('.btn').contains('Edit name and description').click();
        cy.wait(200)
        cy.get('#name').clear().type('Volume-EditName');
        cy.get('.btn').contains('Save').click();
        cy.wait(700)
    })

    it('Usabilities (User click Back button. The system redirect to Volume page)', () => {
        cy.get('tbody tr').eq(1)
                .find('td')
                .eq(1)
                .click();
            cy.wait(200)
        cy.get('.back-to-main-page').contains('Back').click();
        cy.wait(200)
        cy.get('.header-24').contains('Volume');
        cy.wait(700)
    })
})