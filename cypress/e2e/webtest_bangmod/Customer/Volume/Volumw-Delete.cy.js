describe('Volume / Manage / Delete', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(10000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
    })


    it('Usabilities (User click dropdown Action and choose delete menu. The system display modal : >> view in test plan <<)', () => {

        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-411THBkQ”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'No');
            cy.contains('button', 'Yes');
        })
        cy.wait(700);

    })

    it('Usabilities (User click No button. The system close modal)', () => {

        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-411THBkQ”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'No').click();
        })
        cy.wait(700);

    })

    it('Usabilities (User click Yes button. User delete succeed)', () => {

        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Delete').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Confirm Delete Volume?')
                .should('be.visible')
                .and('contain', 'Confirm Delete Volume?')
                .get('.ant-modal-body')
                .contains('Do you want to delete volume “volume-411THBkQ”?') //แก้ไขชื่อ Volume ก่อนรัน
                .wait(300)
            cy.contains('button', 'Yes').click();
        })
        cy.wait(700);

    })
})