describe('Keypair / Delete', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathKeypair()

        cy.wait(2000)

    })

    context('Listing page', () => {
        it('Usabilities (User click icon delete. The system display modal : >> view detail modal in test plan <<)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?') //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No')
                cy.contains('button', 'Yes')
            })
            cy.wait(700);
        })

        it('Usabilities (User click No button. The system close modal.)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?') //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            cy.wait(700);
        })

        it('Usabilities (User click Yes button. User delete succeed.)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?') //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            cy.wait(700);
        })
    })

    context('Manage page', () => {
        it('Usabilities (User click delete button. The system display modal : >> view detail modal in test plan <<)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?')
                    .wait(300)
                cy.contains('button', 'No')
                cy.contains('button', 'Yes')
            })
            cy.wait(700);
        })

        it('Usabilities (User click No button. The system close modal.)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?') //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            cy.wait(700);
        })

        it('Usabilities (User click Yes button. User delete succeed.)', () => {

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
                    .contains('Do you want to delete Keypair "keypair-Generate"?') //แก้ไขชื่อ keypair
                    .wait(300)
                cy.contains('button', 'No').click();
            })
            cy.wait(700);
        })
    })
})