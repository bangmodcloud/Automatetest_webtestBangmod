describe('Volume / Manage / Extend', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(10000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
    })


    it('Usabilities (User click Action dropdown and choose Extend Volume menu. The system display : >> view in test plan <<)', () => {

        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Extend Volume');
            cy.get('.back-to-main-page').contains('Cancel').should('be.visible');
        })
        cy.contains('.card','Enter the new size for this volume.').within(() => {
            cy.get('.card-header').contains('Enter the new size for this volume.');
            cy.get('.ant-table-thead').invoke('text').should('contains','Volume Type','Price (USD)','1 GB / USD / Month','1 GB / USD / Hour');
            cy.get('.callout-warning').contains('Please enter a number greater than the current size (20 GB).')
            cy.contains('label', 'New Size').should('have.text', 'New Size')

        })
        cy.contains('.card','Your quota').within(() => {
            cy.get('.card-header').contains('Your quota');
            cy.get('.title-14').contains('Total Volume/Disk')

        })

        cy.contains('.card','Summary Cost').within(() => {
            cy.get('.card-header').contains('Summary Cost');
        })
        cy.wait(700);

        cy.get('.btn').contains('Extend').should('be.visible');

    })

    it('Validation (User does not enter Name. The system displays an error message “ Please input data”)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('#size').clear();
        cy.get('.btn').contains('Extend').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700)
    })

    it('Validation (User enter number less than current size. The system display error message “Please enter a number greater than current size”)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('#size').clear().type('1');
        cy.get('.btn').contains('Extend').click();
        cy.get('.text-danger').contains('Please enter a number greater than current size');
        cy.wait(700)
    })

    it('Validation (User enter an amount of size exceeding usage quota. The system display error message “The number of Sizes you specified exceeds your usage quota, please specify the number of Sizes less than ……. or contact Support”)', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('#size').clear().type('1000');
        cy.get('.btn').contains('Extend').click();
        cy.get('.text-danger').contains('The number of sizes you specified exceeds your usage quota, please specify the number of sizes less than 995 or contact Support.'); // แก้ไขจำนวน size ทุกครั้งก่อนรันเทส
        cy.wait(700)
    })

    it('Usabilities (User click Cancel button. The system redirect to Manage Volume page.)', () => {

        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('.sticky-header').within(() => {
            cy.get('.back-to-main-page').contains('Cancel').click();
        })
       
        cy.wait(700)
    })

    it('Action success', () => {
        cy.get('tbody tr').eq(1)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.wait(40000)
        cy.get('.btn').contains('Action').click();
        cy.get('.dropdown-menu').contains('Extend Volume').click();
        cy.get('#size').clear().type('25');
        cy.get('.btn').contains('Extend').click();
        cy.wait(700)
    })
})