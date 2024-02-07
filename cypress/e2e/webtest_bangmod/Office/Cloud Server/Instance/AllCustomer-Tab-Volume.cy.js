describe('Tab Volume', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with Name.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(20000);
        cy.get('#search').type('test-volume');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Wara Test');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('name');
        cy.get('.ant-empty-description').contains('No Data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column Column Name / Description / Size / Type / Bootable / Cloud Instance / Status\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(8000);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Name
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Name
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Description
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Description
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Size
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Size
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Type
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Type
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Bootable
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Bootable
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Cloud Instance
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Cloud Instance
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Status



        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Name.\ The system opens a new tab to Manage Volume  page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(8000);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
    it('Usabilities (Admin click hyper link Cloud Instance.\ The system opens a new tab to Manage Cloud of Instance page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(20000);
        cy.get(':nth-child(1) > :nth-child(6) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})