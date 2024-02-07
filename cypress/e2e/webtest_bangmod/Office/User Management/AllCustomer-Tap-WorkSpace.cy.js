describe('Tab Workspace', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    // it('Usabilities (Admin search with Workspace ID and Workspace Name.  The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

    //     cy.get('#user-management-customer').click();
    //     cy.get('#search').type('pla01@gmail.com');
    //     cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
    //     cy.get(':nth-child(6) > .px-0').click({ force: true });
    //     cy.wait(300);
    //     cy.get('#search').type('65096097a351ff06f9a1f19d');
    //     cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
    //     cy.get('#search').clear().type('Default Workspace');
    //     cy.get('.ant-table-row > :nth-child(1)').should('be.visible');
    //     cy.get('#search').clear().type('test name');
    //     cy.get('.ant-empty-description').contains('No Data')
    //     cy.wait(700);

    // })

    it('Usabilities (Admin click caret-up icon Fields Column No / Workspace ID / Workspace Name / Description / Permisson.\
        The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(6) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick(); //No
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').click(); //No
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick(); //Workspace ID
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click(); //Workspace ID
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick(); //Workspace Name
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click(); //Workspace Name
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick(); // Description
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click(); // Description
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick(); //Permisson.
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click(); //Permisson.



        cy.wait(700);

    })

    it('Usabilities (Admin click hyper link Workspace Name.\ The system opens a new tab to Workspace page)', () => {

        cy.get('#user-management-customer').click();
        cy.get('#search').type('pla01@gmail.com');
        cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
        cy.get(':nth-child(6) > .px-0').click({ force: true });
        cy.wait(300);
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').invoke('removeAttr', 'target').click();

        cy.wait(700);

    })
})