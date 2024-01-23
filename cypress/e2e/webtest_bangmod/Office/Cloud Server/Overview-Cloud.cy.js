describe('Overview Cloud', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usibirities (Admin click tab Online , Offline , Suspended and Unavailable . The system display list data)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.get(':nth-child(2) > .px-0').click({force: true}); // tab Online
        cy.get(':nth-child(3) > .px-0').click({force: true}); // tab Offline
        cy.get(':nth-child(4) > .px-0').click({force: true}); // tab Suspended
        cy.get(':nth-child(6) > .px-0').click({force: true}); // Unavailable
        cy.wait(700);
       

    })

    it('Usibirities (Admin click tab Failed. The system display list data Unpublished and display delete button.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.get(':nth-child(5) > .px-0').click({force: true}); // tab Failed
        cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
        cy.get('.BLACK-ICON > .btn').should('be.visible');
        
        cy.wait(700);
       

    })

    it('Usibirities (Admin search Hostname and Customer. The system displays the searched list. If not found, it will display a message saying No Data.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.wait(500);
        cy.get('#search').type('cloud-test',{force: true});
        cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
        cy.wait(500);
        cy.get('#search').clear().type('varaporn.ad@gmail.com');
        cy.get(':nth-child(1) > :nth-child(1)').should('be.visible')
        cy.wait(500);
        cy.get('#search').clear().type('No data');
        cy.get('.ant-empty-description').contains('No data')
        
        cy.wait(700);
       

    })

    it('Usibirities (Admin click caret-up icon Fields Column No/ UID / Hostname / Ram (GB) / CPU (Core) / IP Address / Status / Customer.\
            The system will to sort ascending.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.get(':nth-child(1) > .ant-table-column-sorters').click({force: true}); // No
        cy.wait(500);
        cy.get(':nth-child(1) > .ant-table-column-sorters').dblclick({force: true}); // No
        cy.wait(200);
        cy.get(':nth-child(2) > .ant-table-column-sorters').click({force: true}); // UID
        cy.wait(500);
        cy.get(':nth-child(2) > .ant-table-column-sorters').dblclick({force: true}); // UID
        cy.wait(200);
        cy.get(':nth-child(3) > .ant-table-column-sorters').click({force: true}); // Hostname
        cy.wait(500);
        cy.get(':nth-child(3) > .ant-table-column-sorters').dblclick({force: true}); // Hostname
        cy.wait(200);
        cy.get(':nth-child(4) > .ant-table-column-sorters').click({force: true}); // Ram (GB)
        cy.wait(500);
        cy.get(':nth-child(4) > .ant-table-column-sorters').dblclick({force: true}); // Ram (GB)
        cy.wait(200);
        cy.get(':nth-child(5) > .ant-table-column-sorters').click({force: true}); // CPU (Core)
        cy.wait(500);
        cy.get(':nth-child(5) > .ant-table-column-sorters').dblclick({force: true}); // CPU (Core)
        cy.wait(200);
        cy.get(':nth-child(6) > .ant-table-column-sorters').click({force: true}); // IP Address 
        cy.wait(500);
        cy.get(':nth-child(6) > .ant-table-column-sorters').dblclick({force: true}); // IP Address
        cy.wait(200);
        cy.get(':nth-child(7) > .ant-table-column-sorters').click({force: true}); // Status
        cy.wait(500);
        cy.get(':nth-child(7) > .ant-table-column-sorters').dblclick({force: true}); // Status
        cy.wait(200);
        cy.get(':nth-child(8) > .ant-table-column-sorters').click({force: true}); // Customer
        cy.wait(500);
        cy.get(':nth-child(8) > .ant-table-column-sorters').dblclick({force: true}); // Customer
        
        cy.wait(700);
       

    })

    it('Usibirities (Admin click hyperlink Hostname. The system direct to Manage Cloud page.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
        cy.get('.header-24-semibold').contains('Manage Cloud')
        
        cy.wait(700);
       

    })

    it('Usibirities (Admin click hyperlink Customer. The system direct to Manage Cloud page.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        cy.get(':nth-child(1) > :nth-child(8) > .underline-link').invoke('removeAttr', 'target').click({force: true});
        cy.get('.header-24-semibold').contains('Manage User')
        
        cy.wait(700);
       

    })

})