describe('Tab Cloud', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with Hostname and Ip Address.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com',{force: true});
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get('#search').type('wara-test');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('10.0.0.1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test Hostname ');
        cy.get('.ant-empty-description').contains('No data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column ID / Hostname  / Display Name / Ram (GB) / CPU (Core) / Transfer-out (TB) / IP Address / Volume / Status.\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com',{force: true});
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //ID
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //ID
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Hostname
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Hostname
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Display Name
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Display Name
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Ram (GB)
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Ram (GB)
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //CPU (Core)
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //CPU (Core)
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //IP Address
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //IP Address
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Volume
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Volume
       
        cy.wait(200);


        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Hostname.\ The system opens a new tab to Manage cloud page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com',{force: true});
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(7) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})