describe('Tab Router', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with Name and External Network.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(10) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get('#search').type('test-Router');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('43.239.251.34');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test name');
        cy.get('.ant-empty-description').contains('No Data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column Name  / Description / SNAT / External Network / Status / Admin State\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(10) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Name
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Name
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Description
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Description
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //SNAT
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //SNAT
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //External Network
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //External Network
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Status
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Admin Status
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Admin Status



        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Name.\ The system opens a new tab to Manage Route page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(10) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})