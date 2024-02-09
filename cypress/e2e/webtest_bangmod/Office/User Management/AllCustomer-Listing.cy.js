describe('All Customer', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    it('Usabilities (Admin click tab All  / Inactive / Active / Suspend.\
      The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

        cy.get('#user-management-customer').click();
        cy.get(':nth-child(2) > .px-0').click({force: true}); // tab Inactive
        cy.wait(300);
        cy.get(':nth-child(3) > .px-0').click({force: true}); // tab Active
        cy.wait(300);
        cy.get(':nth-child(4) > .px-0').click({force: true}); // tab Suspend
        cy.wait(700);

    })

        it('Usabilities (Admin search with UID / Email / First Name / Last Name / Default Workspace.\
            The system displays the searched list. If not found, it will display a message saying No Data. )', () => {

          cy.get('#user-management-customer').click();
          cy.get('#search').type('65c2fe6d7737b670ed4b7c80',{force: true});
          cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
          cy.wait(500);
          cy.get('#search').clear().type('pla01@gmail.com',{force: true});
          cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
          cy.wait(500);
          cy.get('#search').clear().type('วรา',{force: true});
          cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
          cy.wait(500);
          cy.get('#search').clear().type('ศรี',{force: true});
          cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
          cy.wait(500);
          cy.get('#search').clear().type('65c5db96e6400372c838fe63',{force: true});
          cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
          cy.wait(700);

      })

    it('Usabilities (Admin click caret-up icon Fields Column No / UID / Email / Full Name / Default Workspace / Account Type / Status \
       The system will to sort ascending.)', () => {

        cy.get('#user-management-customer').click();
        cy.get(':nth-child(1) > .ant-table-column-sorters').click({force: true}); // No
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick({force: true}); // No
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click({force: true}); // UID
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick({force: true}); // UID
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click({force: true}); // Email
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick({force: true}); // Email
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click({force: true}); // Full Name
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick({force: true}); // Full Name
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click({force: true}); // Default Workspace
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick({force: true}); // Default Workspace
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click({force: true}); // Account Type
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick({force: true}); // Account Type
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click({force: true}); // Status
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick({force: true}); // Status

        cy.wait(700);

    })

    it('Usabilities (Admin click caret-up icon Fields Column No / UID / Email / Full Name / Default Workspace / Account Type / Status \
    The system will to sort ascending.)', () => {

     cy.get('#user-management-customer').click();
     cy.wait(1000);
     cy.get('#search').type('pla01@gmail.com',{force: true});
     cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
     cy.get('.header-24-semibold').contains('Manage User')

     cy.wait(700);

 })
})