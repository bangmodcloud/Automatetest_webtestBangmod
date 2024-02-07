describe('Tab Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with IP Address / Instance and Network Interface  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(11) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get('#search').type('43.239.251.28');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Wara-test');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test name');
        cy.get('.ant-empty-description').contains('No Data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column IP Address / Description / Instance / Network Interface / Status\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(10) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //IP Address
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //IP Address
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Description
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Description
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Instance
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Instance
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Network Interface
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Network Interface
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Status



        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Name.\ The system opens a new tab to Manage Route page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(10) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})