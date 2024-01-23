describe('List Size Plan', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab Published. The system display list data Published.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(2) > .px-0').click(); // Published
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.wait(700);
        })

        it('Usibirities (Admin click tab Unpublished. The system display list data Unpublished and display delete button.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(3) > .px-0').click(); // Unpublished
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.get('.ICON-TERTIARY > .btn').should('be.visible');
            cy.wait(700);
        })

        it('Usibirities (Admin search Name. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get('#search').type('Linux');
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.wait(500);
            cy.get('#search').clear().type('No data');
            cy.get('.ant-empty-description').contains('No data')
            cy.wait(700);
        })

        it('Usibirities (Admin click caret-up icon Fields Column No / UID / Name / Published.\
            The system will to sort ascending.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(1) > .ant-table-column-sorters').click(); // No
            cy.wait(500);
            cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); // No
            cy.wait(200);
            cy.get(':nth-child(2) > .ant-table-column-sorters').click(); // UID
            cy.wait(500);
            cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); // UID
            cy.wait(200);
            cy.get(':nth-child(3) > .ant-table-column-sorters').click(); // Name
            cy.wait(500);
            cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); // Name
            cy.wait(200);
            cy.get(':nth-child(4) > .ant-table-column-sorters').click(); // Published.
            cy.wait(500);
            cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); // Published.
            cy.wait(700);
            
        })

          it('Usibirities (Admin click hyperlink Name. The system direct to Manage Size Plan page.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-size-plan').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.header-24-semibold').contains('Manage Size Plan')
            cy.wait(700);
        })

    })