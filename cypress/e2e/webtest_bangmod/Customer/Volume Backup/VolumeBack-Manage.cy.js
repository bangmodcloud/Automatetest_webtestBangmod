import Papa from 'papaparse';
describe('Volume Backup / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolumeBackup()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume-backup')

    })

    it('Usabilities (User go to Create Volume Backup page. The system display :)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Volume Backup');
            cy.get('.btn').contains('Delete').should('be.visible');
            cy.get('.btn').contains('Restore').should('be.visible');
            cy.contains('Back').should('be.visible')
        });
        cy.contains('.card', 'General Information').within(() => {
            cy.get('.card-header').contains('General Information');
            cy.get('.btn').contains('Edit').should('be.visible');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'Create Date').should('have.text', 'Create Date')
            cy.contains('label', 'Volume').should('have.text', 'Volume')

        });
        cy.contains('.card','Specs').within(() => {
            cy.get('.card-header').contains('Specs');
            cy.contains('label', 'Size').should('include.text', 'Size')
        })

    })

    it('Usabilities (User click Edit button. The system open to edit data)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.get('#edit-general-information').should('be.visible')

    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.get('#name').clear();
        cy.get('.btn').contains('Save').click();
        cy.get('.danger').contains('Please input data');
        cy.wait(700)
    })

    it('Usabilities (User click Cancel button. The system close form edit volume)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.get('#name').clear();
        cy.wait(200)
        cy.get('.btn').contains('Cancel').click();
        cy.wait(700)
    })

    it('Usabilities (User try edit volume backup. User edit data volume backup succeed.)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const nameEdit = row.nameVolumeBackupEdit
                cy.get('#name').clear().type(nameEdit);
                cy.wait(200)
                cy.get('.btn').contains('Save').click();
                cy.wait(700)
            })
        })
    })

    it('Usabilities (User click Back button. The system redirect to Volume Backup page)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.back-to-main-page').contains('Back').click();
        cy.wait(200)
        cy.get('.header-24').contains('Volume Backup');
    })
})