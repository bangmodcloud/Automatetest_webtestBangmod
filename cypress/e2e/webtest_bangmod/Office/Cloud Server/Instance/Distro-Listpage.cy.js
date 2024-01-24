describe('List Distro', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

        it('Usibirities (Admin click tab Published. The system display list data Published.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(2) > .px-0').click(); // Published
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.wait(700);
        })

        it('Usibirities (Admin click tab Unpublished. The system display list data Unpublished and display delete button.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(3) > .px-0').click(); // Unpublished
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.get('.BLACK-ICON > .btn').should('be.visible');
            cy.wait(700);
        })

        it('Usibirities (Admin search Name and Size Plan. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get('#search').type('Ubuntu');
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.wait(500);
            cy.get('#search').clear().type('Linux');
            cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
            cy.wait(500);
            cy.get('#search').clear().type('No data');
            cy.get('.ant-empty-description').contains('No data')
            cy.wait(700);
        })

        it('Usibirities (Admin click caret-up icon Fields Column ID / Name / Description / Minimum Disk Required (GB) / Version / Size Plan / Activated / Published.\
            The system will to sort ascending.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
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
            cy.get(':nth-child(4) > .ant-table-column-sorters').click(); // Description
            cy.wait(500);
            cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); // Description
            cy.wait(200);
            cy.get(':nth-child(5) > .ant-table-column-sorters').click(); // Minimum Disk Required (GB)
            cy.wait(500);
            cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); // inimum Disk Required (GB)
            cy.wait(200);
            cy.get(':nth-child(6) > .ant-table-column-sorters').click({force: true}); // Version 
            cy.wait(500);
            cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick({force: true}); // Version 
            cy.wait(200);
            cy.get(':nth-child(7) > .ant-table-column-sorters').click({force: true}); // Size Plan
            cy.wait(500);
            cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick({force: true}); // Size Plan
            cy.wait(200);
            cy.get(':nth-child(8) > .ant-table-column-sorters').click({force: true}); // Activated
            cy.wait(500);
            cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick({force: true}); // Activated
            cy.wait(200);
            cy.get(':nth-child(9) > .ant-table-column-sorters').click({force: true}); // Published
            cy.wait(500);
            cy.get(':nth-child(9) > .ant-table-column-sorters').dblclick({force: true}); // Published
            cy.wait(700);
        })

          it('Usibirities (Admin click hyperlink Name. The system direct to Manage Distro Plan page.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click();
            cy.get('.header-24-semibold').contains('Manage Distro')
            cy.wait(700);
        })

        it('Usibirities (Admin click hyperlink Size plan. The system direct  to Manage Size Plan page.)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-distro').click();
            cy.get(':nth-child(1) > :nth-child(7) > .underline-link').click({force: true});
            cy.get('.header-24-semibold').contains('Manage Size Plan')
            cy.wait(700);
        })
    })