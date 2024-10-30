import Papa from 'papaparse';
describe('Keypair / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathKeypair()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/keypair')

    })

    context('Listing page', () => {
        it('Usabilities (User click icon delete. The system display modal : >> view detail modal in test plan <<)', () => {

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(4)
                .click();
            cy.wait(200)
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Keypair?')
                    .get('.ant-modal-body')
                    .contains(textmodal) //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No')
                cy.contains('button', 'Yes')
            })
            cy.wait(700);
        })
    })
})

        it('Usabilities (User click No button. The system close modal.)', () => {

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(4)
                .click();
            cy.wait(200)
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Keypair?')
                    .get('.ant-modal-body')
                    .contains(textmodal) //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            cy.wait(700);
        })
    })
        })

        it('Usabilities (User click Yes button. User delete succeed.)', () => {

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(4)
                .click();
            cy.wait(200)
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                    .should('be.visible')
                    .and('contain', 'Confirm Delete Keypair?')
                    .get('.ant-modal-body')
                    .contains(textmodal) //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'Yes').click();
            })
            cy.wait(700);
        })
    })
})
    })

    context('Manage page', () => {
        it('Usabilities (User click delete button. The system display modal : >> view detail modal in test plan <<)', () => {

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(1)
                        .click();
                    cy.wait(200)
                    cy.contains('Delete').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                            .should('be.visible')
                            .and('contain', 'Confirm Delete Keypair?')
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

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(1)
                        .click();
                    cy.wait(200)
                    cy.contains('Delete').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                            .should('be.visible')
                            .and('contain', 'Confirm Delete Keypair?')
                            .get('.ant-modal-body')
                            .contains(textmodal)
                            .wait(300)
                        cy.contains('button', 'No').click();
                    })
                    cy.wait(700);
                })
            })
        })

        it('Usabilities (User click Yes button. User delete succeed.)', () => {

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textmodaldeleteKeypair;
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(1)
                        .click();
                    cy.wait(200)
                    cy.contains('Delete').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Delete Keypair?')
                            .should('be.visible')
                            .and('contain', 'Confirm Delete Keypair?')
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
})