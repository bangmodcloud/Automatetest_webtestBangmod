describe('Volume / Defult Volume / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)

    })


    it('Usabilities (User click dropdown Action and choose delete menu. The system display modal : >> view in test plan <<)', () => {

        cy.get('tbody tr').eq(2)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        //cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-modvm-ojx2y-XP-1”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'No');
            cy.contains('button', 'Yes');
        })
        cy.wait(700);

    })

    it('Usabilities (User click No button. The system close modal)', () => {

        cy.get('tbody tr').eq(2)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        //cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-modvm-ojx2y-XP-1”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'No').click();
        })
        cy.wait(700);

    })

    it('Usabilities (User click Yes button. The system display modal : "Can’t delete volume")', () => {

        cy.get('tbody tr').eq(2)
            .find('td')
            .eq(1)
            .click();
        cy.wait(1000)

        //cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-modvm-ojx2y-XP-1”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'Yes').click();
        })
        cy.wait(700);

        cy.contains('.ant-modal-content', "Can't delete volume").within(() => {
            cy.contains('.ant-modal-title', "Can't delete volume")
                .should('be.visible')

            cy.get('.ant-modal-body').within(() => {
                cy.contains('The volume cannot be delete because it has associated resources.')
                cy.contains('To delete the volume, first delete the following resource.')
                cy.get('.ant-table-content')
                    .get('.ant-table-thead').invoke('text').should('contains', 'Resource', 'Name')
                    .wait(300)
            })
            cy.contains('button', 'Close').should('be.visible');
        })

        cy.wait(700);

    })
})
