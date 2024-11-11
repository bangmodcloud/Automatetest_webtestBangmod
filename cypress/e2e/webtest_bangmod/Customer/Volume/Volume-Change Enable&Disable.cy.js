import Papa from 'papaparse';
describe('Volume / Change Status Enable & Disable', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')

    })

    context('Change Status to Disable', () => {

        it('Usabilities (User click toggle to Disable. The system display modal:)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalDisable = row.textModalDisable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalDisable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                            .wait(300)
                        cy.contains('button', 'Cancel').should('be.visible')
                        cy.contains('button', 'Confirm disable').should('be.visible')
                    })
                })
                cy.wait(700)
            })
        })

        it('Usabilities (User click Cancel button. The system close modal)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalDisable = row.textModalDisable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalDisable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                            .wait(300)
                        cy.contains('button', 'Cancel').click();
                    })

                    cy.wait(700)
                })
            })
        })

        it('Usabilities (User click Comfirm disable button. User Change status to disable succeed)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalDisable = row.textModalDisable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalDisable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                            .wait(300)
                        cy.contains('button', 'Confirm disable').click();

                    })
                })
            })
            cy.wait(700)
        })
    })

    context('Change Status to Enable', () => {

        it('Usabilities (User click toggle to Disable. The system display modal:)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalEnable = row.textModalEnable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalEnable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                            .wait(300)
                        cy.contains('button', 'Cancel').should('be.visible')
                        cy.contains('button', 'Confirm enable').should('be.visible')

                    })
                })
                cy.wait(700)
            })
        })

        it('Usabilities (User click Cancel button. The system close modal)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalEnable = row.textModalEnable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalEnable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                            .wait(300)
                        cy.contains('button', 'Cancel').click();
                    })
                })
                cy.wait(700)
            })
        })

        it('Usabilities (User click Comfirm disable button. User Change status to disable succeed)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume/dataVolume.csv";

            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {

                    const textModalEnable = row.textModalEnable

                    cy.get('.ant-switch').click();
                    cy.get('.ant-modal-content').within(() => {
                        cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                            .should('be.visible')
                            .get('.ant-modal-body')
                            .contains(textModalEnable) //แก้ไขชื่อ Volume ก่อนรัน
                        cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                            .wait(300)
                        cy.contains('button', 'Confirm enable').click();
                    })
                })
                cy.wait(700)
            })
        })
    })
})