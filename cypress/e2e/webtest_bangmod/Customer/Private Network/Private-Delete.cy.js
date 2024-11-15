import Papa from 'papaparse';
describe('Private Network / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathPrivate()
        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/private-network')
    })

    // context('Listing page', () => {
    //     it('Usabilities (User click icon delete. The system display modal : >> view detail modal in test plan <<)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodal = row.textModalDeletePrivate;
    //                 cy.get('tbody tr').eq(1)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodal) //แก้ไขชื่อ Private
    //                         .wait(300)
    //                     cy.contains('button', 'No')
    //                     cy.contains('button', 'Yes')
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })

    //     it('Usabilities (User click No button. The system close modal.)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodal = row.textModalDeletePrivate;
    //                 cy.get('tbody tr').eq(1)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodal) //แก้ไขชื่อ Private
    //                         .wait(300)
    //                     cy.contains('button', 'No').click();
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })

    //     it('Usabilities (User click Yes button. User delete succeed.)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodal = row.textModalDeletePrivate;
    //                 cy.get('tbody tr').eq(0)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodal) //แก้ไขชื่อ Private
    //                         .wait(300)
    //                     cy.contains('button', 'Yes').click();
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })
    // })

    // context('Manage page', () => {
    //     it('Usabilities (User click delete button. The system display modal : >> view detail modal in test plan <<)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodalManagePage = row.textModalDeleteManagePage;
    //                 cy.get('tbody tr').eq(2)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.contains('Delete').click();
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodalManagePage)
    //                         .wait(300)
    //                     cy.contains('button', 'No')
    //                     cy.contains('button', 'Yes')
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })

    //     it('Usabilities (User click No button. The system close modal.)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodalManagePage = row.textModalDeleteManagePage;
    //                 cy.get('tbody tr').eq(2)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.contains('Delete').click();
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodalManagePage)
    //                         .wait(300)
    //                     cy.contains('button', 'No').click();
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })

    //     it('Usabilities (User click Yes button. User delete succeed.)', () => {

    //         const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
    //         cy.readFile(csvFilePath).then(csvData => {
    //             const data = Papa.parse(csvData, {
    //                 header: true,
    //                 skipEmptyLines: true,
    //             }).data;
    //             data.forEach((row) => {
    //                 const textmodalManagePage = row.textModalDeleteManagePage;
    //                 cy.get('tbody tr').eq(0)
    //                     .find('td')
    //                     .eq(5)
    //                     .click();
    //                 cy.wait(200)
    //                 cy.contains('Delete').click();
    //                 cy.get('.ant-modal-content').within(() => {
    //                     cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
    //                         .should('be.visible')
    //                         .and('contain', 'Confirm Delete Private Network?')
    //                         .get('.ant-modal-body')
    //                         .contains(textmodalManagePage)
    //                         .wait(300)
    //                     cy.contains('button', 'Yes').click();
    //                 })
    //                 cy.wait(700);
    //             })
    //         })
    //     })
    // })

    context("Case Can't delete private network", () => {
        it('Usabilities (User click delete private network button that has associated resources. The system display modal : >> view detail modal in test plan <<)', () => {
            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    const textmodal = row.textModalDeletePrivate;
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(5)
                        .click();
                    cy.wait(200)
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Delete Private Network?')
                            .should('be.visible')
                            .and('contain', 'Confirm Delete Private Network?')
                            .get('.ant-modal-body')
                            .contains(textmodal) //แก้ไขชื่อ Private
                            .wait(300)
                        cy.contains('button', 'Yes').click();
                    })
                    cy.wait(700);

                    cy.contains('.ant-modal-content', "Can't delete private network").within(() => {
                        cy.contains('.ant-modal-title', "Can't delete private network")
                            .should('be.visible')

                        cy.get('.ant-modal-body').within(() => {
                            cy.contains('The private network cannot be delete because it has associated resources.')
                            cy.contains('To delete the private network, first delete the following resource.')
                            cy.get('.ant-table-content')
                                .get('.ant-table-thead').invoke('text').should('contains', 'Resource', 'Name')
                                .wait(300)
                        })
                        cy.contains('button', 'Close').should('be.visible');
                    })
                })
            })
        })
    })
})