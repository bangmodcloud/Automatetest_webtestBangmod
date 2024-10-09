describe('Keypair / Listing', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathKeypair()

        cy.wait(2000)

    })

    it('Usabilities (User go to Keypair page. The system display :)', () => {

        cy.get('.header-24').contains('Keypair');
        cy.get('.btn').contains('Create Keypair').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Fingerprint','Date Added')

        cy.wait(700);
    })

    it('Usabilities (User searches by Name. The system will display the searched items.)', () => {
       
        cy.get('#search').type('keypair-waratest')
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .should('contain', 'keypair-waratest')  
            cy.wait(700);

    })
    it('Usabilities (User click caret-up icon Fields Column No, Name, Fingerprint and Date Added. The system will to sort ascending.)', () => {
       
        cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Fingerprint"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Date Added"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(700);


    })
})