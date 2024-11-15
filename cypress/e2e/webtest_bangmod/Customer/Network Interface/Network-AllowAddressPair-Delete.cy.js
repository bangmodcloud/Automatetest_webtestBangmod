import Papa from 'papaparse';
describe('Network / Manage / Allow Address Pair / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathNetwork()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/network-interface')
        cy.wait(2000)
    })

    it('Usabilities (User click icon delete. The system display modal: >> can view in test plan <<)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const textmodal = row.textModalDeleteAllowedAddressPair;

                cy.get('tbody tr').eq(0)
                .find('td')
                .eq(2)
                .click();
            cy.wait(200)
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Delete Allowed Address Pair?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains(textmodal)
                    .wait(300)
                cy.contains('button', 'No')
                cy.contains('button', 'Yes')
            })
            })
        })

        cy.wait(700);
    })

    it('Usabilities (User click No button. The system close modal.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const textmodal = row.textModalDeleteAllowedAddressPair;

                cy.get('tbody tr').eq(0)
                .find('td')
                .eq(2)
                .click();
            cy.wait(200)
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Delete Allowed Address Pair?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains(textmodal) 
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            })
        })

        cy.wait(700);
    })

    it('Usabilities (User click Yes button. User delete succeed.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const textmodal = row.textModalDeleteAllowedAddressPair;

                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(2)
                    .click();
                cy.wait(200)
                cy.get('.ant-modal-content').within(() => {
                    cy.contains('.ant-modal-title', 'Confirm Delete Allowed Address Pair?')
                        .should('be.visible')
                        .get('.ant-modal-body')
                        .contains(textmodal)
                        .wait(300)
                    cy.contains('button', 'Yes').click();
                })
            })
        })

        cy.wait(700);
    })
})