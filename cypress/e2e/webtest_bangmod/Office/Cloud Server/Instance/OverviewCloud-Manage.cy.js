describe('Overview Cloud / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()

    })

    context('tab Information of Cloud', () => {
        it('Usibirities (Admin click card volume . The system open new tab Manage Volume)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
            cy.wait(700);
            cy.get(':nth-child(2) > .app_renderer_lib_style__card-style > .card > .card-body > .row').invoke('removeAttr', 'target').click();
            cy.wait(700);


        })
    })

    context('tab Network Interface', () => {
        it('Usibirities (Admin go to tab Network Interface . The system display list Network Interface)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
            cy.wait(700);
            cy.get(':nth-child(2) > .px-0').click({force: true});
            cy.wait(700);

        })
    })

    context('tab Network Interface', () => {
        it('Usibirities (Admin go to tab Monitor and click expand graph. The system display grap)', () => {

            cy.get('#cloud-server-collapse').click();
            cy.get('#cloud-instance-collapse').click();
            cy.get('#cloud-overview').click();
            cy.get(':nth-child(1) > :nth-child(3) > .underline-link').click({force: true});
            cy.wait(700);
            cy.get(':nth-child(3) > .px-0').click({force: true});
            cy.get('.ICON > .btn > .fa-expand').first().click({force: true} );
            cy.wait(700);
            cy.get('body').type('{esc}',{force: true});

            cy.wait(700);


        })
    })
})