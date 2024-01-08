describe('Overview Cloud', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })


    it('Usibirities (User try select filter Timestamp / Actor ID / Service Type / Target / Action . The system displays a list of each selected Filter.)', () => {

        cy.get('#cloud-server-collapse').click();
        cy.get('#cloud-instance-collapse').click();
        cy.get('#cloud-overview').click();
        
        cy.wait(300);
       

    })
})