import Papa from 'papaparse';
describe('Volume Backup / Manage / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolumeBackup()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume-backup')

    })

    it('Usabilities (User click Restore button. The system display modal :)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Delete').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const textmodal = row.textModalDeleteVolume;

                cy.get('.ant-modal-content').within(() => {
                    cy.contains('.ant-modal-title', 'Confirm Delete Volume Backup?')
                        .should('be.visible')
                        .and('contain', 'Confirm Delete Volume Backup?')
                        .get('.ant-modal-body')
                        .contains(textmodal)
                        .wait(300)
                    cy.contains('button', 'No')
                    cy.contains('button', 'Yes')
                })
                cy.wait(700);
            })
        })
    })


    it('Usabilities (User click No button. The system close modal.)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Delete').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const textmodal = row.textModalDeleteVolume;

                cy.get('.ant-modal-content').within(() => {
                    cy.contains('.ant-modal-title', 'Confirm Delete Volume Backup?')
                        .should('be.visible')
                        .and('contain', 'Confirm Delete Volume Backup?')
                        .get('.ant-modal-body')
                        .contains(textmodal)
                        .wait(300)
                    cy.contains('button', 'No').click();
                })
                cy.wait(700);
            })
        })
    })

    it('Usabilities (User click Yes button. User restore succeed.)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Delete').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const textmodal = row.textModalDeleteVolume;

                cy.get('.ant-modal-content').within(() => {
                    cy.contains('.ant-modal-title', 'Confirm Delete Volume Backup?')
                        .should('be.visible')
                        .and('contain', 'Confirm Delete Volume Backup?')
                        .get('.ant-modal-body')
                        .contains(textmodal)
                        .wait(300)
                    cy.contains('button', 'Yes').click();
                })
                cy.wait(700);
            })
        })
    })
})
