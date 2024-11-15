describe('Volume / Change Status Enable & Disable', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)

    })

    context('Change Status to Disable', () => {

        it('Usabilities (User click toggle to Disable. The system display modal:)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to disable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                    .wait(300)
                cy.contains('button', 'Cancel').should('be.visible')
                cy.contains('button', 'Confirm disable').should('be.visible')
            })
        })

        it('Usabilities (User click Cancel button. The system close modal)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to disable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                    .wait(300)
                cy.contains('button', 'Cancel').click();
            })
        })

        it('Usabilities (User click Comfirm disable button. User Change status to disable succeed)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Disable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to disable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Disabling backup will result in this volume not being automatically backed up at the system-set interval. But the volume backup will still be charged until you delete the backup file.')
                    .wait(300)
                cy.contains('button', 'Confirm disable').click();
            })
        })
    })

    context('Change Status to Enable', () => {

        it('Usabilities (User click toggle to Disable. The system display modal:)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to enable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                    .wait(300)
                cy.contains('button', 'Cancel').should('be.visible')
                cy.contains('button', 'Confirm enable').should('be.visible')
            })
        })

        it('Usabilities (User click Cancel button. The system close modal)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to enable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                    .wait(300)
                cy.contains('button', 'Cancel').click();
            })
        })

        it('Usabilities (User click Comfirm disable button. User Change status to disable succeed)', () => {
            cy.get('tbody tr').eq(0)
                .find('td')
                .eq(1)
                .click();
            cy.wait(2000)
            cy.get('.ant-switch').click();
            cy.get('.ant-modal-content').within(() => {
                cy.contains('.ant-modal-title', 'Confirm Enable System Automatic Backup ?')
                    .should('be.visible')
                    .get('.ant-modal-body')
                    .contains('Do you want to enable automatic backup of this Volume “volume-modvm-pureewat-mf”?') //แก้ไขชื่อ Volume ก่อนรัน
                cy.get('.callout-danger').contains('Enabling Automatic Backup will cause this volume to be automatically backed up. The backup interval will depend on the system.')
                    .wait(300)
                cy.contains('button', 'Confirm enable').click();
            })
        })
    })
})