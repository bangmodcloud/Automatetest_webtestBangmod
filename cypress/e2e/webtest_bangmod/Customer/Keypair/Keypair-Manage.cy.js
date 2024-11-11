describe('Keypair / Manage', () => {
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathKeypair()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/keypair')

    })

    it('Usabilities (User go to Create Keypair page. The system display :)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Keypair');
            cy.get('.btn').contains('Delete').should('be.visible');
            cy.contains('Back').should('be.visible')
        })
        cy.get('.card').within(() => {
            cy.get('.card-header').contains('Keypair Information');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Public Key').should('have.text', 'Public Key')
            cy.contains('label', 'Keypair Fingerprint').should('have.text', 'Keypair Fingerprint')
            cy.contains('label', 'Date Added').should('have.text', 'Date Added')

        })
        cy.wait(700);


    })
})