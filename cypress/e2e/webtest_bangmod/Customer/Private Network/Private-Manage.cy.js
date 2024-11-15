import Papa from 'papaparse';
describe('Private Network / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathPrivate()
        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/private-network')
    })

    it('Usabilities (User go to Manage Private Network page. The system display :)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Private Network');
            cy.get('.back-to-main-page').contains('Back').should('be.visible');
            cy.get('.btn').contains('Delete').should('be.visible');
        });
        cy.contains('.card', 'Private Network Information').within(() => {
            cy.get('.card-header').contains('Private Network Information');
            cy.get('.btn').contains('Edit').should('be.visible');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Subnet').should('have.text', 'Subnet')

        });

        cy.wait(700);
    })

    it('Usabilities (User click Edit button. The system open to edit data)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.wait(200)
        cy.get('.form-control').should('be.visible')

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.wait(200)
        cy.get('#name').clear();
        cy.get('.btn').contains('Save').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(700);
    })

    it('Usabilities (User try edit Private Network. User edit data Private Network succeed.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const nameEdit = row.namePrivateEdit
                cy.get('#name').clear().type(nameEdit);
                cy.wait(200)
                cy.get('.btn').contains('Save').click();
                cy.wait(700)
            })
        })

        cy.wait(700);
    })

    it('Usabilities (User click hyperlink Subnet. The system direct to Subnet page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        
        cy.get('[href="/network/subnet"]').click();
        cy.wait(500)
        cy.get('.header-24').contains('Subnet');

        cy.wait(700);
    })

    it('Usabilities (User click Back button. The system redirect to Private Network page)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        
        cy.get('.back-to-main-page').contains('Back').click();
        cy.wait(500)
        cy.get('.header-24').contains('Private Network');

        cy.wait(700);
    })

})