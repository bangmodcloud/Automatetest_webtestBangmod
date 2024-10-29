describe('Tab Floating IP', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('Identification Document card', () => {

        it('Usabilities (Admin click Request button in Identification Document card.\
            The system display modal “Send request identify document to customer?” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com');
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.get(':nth-child(2) > .px-0').click({ force: true });
            cy.wait(300);
           
            cy.wait(700);

        })

    })
})