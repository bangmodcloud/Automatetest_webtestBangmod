describe('Volume / Attach to Instance', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)

    })

    it('Usabilities (User click Attach to Instance Volume button. The system display :)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Attach to Instance').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Attach to Instance')
                .should('be.visible')
            cy.get('.ant-modal-body').within(() => {
                cy.get('.ant-table-content')
                    .get('.ant-table-thead').invoke('text').should('contains','Volume Name', 'Description', 'Size (GB)', 'Type', 'Bootable')
            })
            cy.contains('button', 'Cancel').should('be.visible')
            cy.contains('button', 'Attach').should('be.visible')
        })
    })

    it('Usabilities (User does not select Instance. The system display error message "Please input data")', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Attach to Instance').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Attach to Instance')
                .should('be.visible')
            cy.get('.ant-modal-body').within(() => {
                cy.get('.ant-table-content')
                    .get('.ant-table-thead').invoke('text').should('contains','Volume Name', 'Description', 'Size (GB)', 'Type', 'Bootable')
            })
            cy.contains('button', 'Attach').click();
            cy.get('.text-danger').contains('Please input data');
        })
    })

    it('Usabilities (User click Cancel button. The system close modal)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Attach to Instance').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Attach to Instance')
                .should('be.visible')
            cy.get('.ant-modal-body').within(() => {
                cy.get('.ant-table-content')
                    .get('.ant-table-thead').invoke('text').should('contains','Volume Name', 'Description', 'Size (GB)', 'Type', 'Bootable')
            })
            cy.contains('button', 'Cancel').click();
        })
    })

    it('Usabilities (User select Instance and click Attach button. User Attach To Instance succeed)', () => {
        cy.get('tbody tr').eq(4)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Attach to Instance').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Attach to Instance')
                .should('be.visible')
            cy.get('.ant-modal-body').within(() => {
                cy.get('.ant-table-content')
                    .get('.ant-table-thead').invoke('text').should('contains','Volume Name', 'Description', 'Size (GB)', 'Type', 'Bootable')
            })
            cy.get('#cloudItemId').select('modvm-ojx2y-XP-1');

            cy.contains('button', 'Attach').click();
        })
    })
})
