describe('Tab Load Balancer', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with Name and Size.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(9) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get('#search').type('test-Load-Balancer');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('Load-Balancer-Flavor1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test name ');
        cy.get('.ant-empty-description').contains('No Data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column Name / Size / Number Listener / Number Pool / Operating Status / Provisioning Status / Admin State\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(9) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //Name
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //Name
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Size
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Size
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Number Listener
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Number Listener
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Number Pool
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Number Pool
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Operating Status
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Operating Status
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Provisioning Status
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Provisioning Status
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Admin State
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Admin State



        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Name.\ The system opens a new tab to Manage Load Balancer page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(9) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(2) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})