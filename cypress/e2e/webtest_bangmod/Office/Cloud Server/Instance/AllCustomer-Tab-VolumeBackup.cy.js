describe('Tab Volume Backup', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin search with Name / Size / Create at / Type. / Volume.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(8) > .px-0').click({ force: true });
        cy.wait(500);
        cy.get('#search').type('system-backup-volume-testA1');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('30');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('2023-09-29');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('On Demand');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('volume-test');
        cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
        cy.get('#search').clear().type('test-name');
        cy.get('.ant-empty-description').contains('No data')
        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column Name / Description / Size / Create at / Type / Status / Volume\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(8) > .px-0').click({ force: true });
        cy.wait(500);
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
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Create at
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Create at
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Type
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Type
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Status
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Volume
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Volume


        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column Name / Description / Size / Create at / Type / Status / Volume\
    The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(8) > .px-0').click({ force: true });
        cy.wait(500);
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
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); //Create at
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); //Create at
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Type
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Type
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick(); //Status
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click(); //Status
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick(); //Volume
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click(); //Volume


        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Name.\ The system opens a new tab to Manage Volume backup page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(8) > .px-0').click({ force: true });
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(1) > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage Volume Backup')

        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Volume.\ The system opens a new tab to Manage Volume page.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(8) > .px-0').click({ force: true });
        cy.wait(500);
        cy.get(':nth-child(1) > :nth-child(7) > .underline-link').invoke('removeAttr', 'target').click();
        cy.get('.header-30-semibold').contains('Manage Volume')

        cy.wait(700);

    })

})
