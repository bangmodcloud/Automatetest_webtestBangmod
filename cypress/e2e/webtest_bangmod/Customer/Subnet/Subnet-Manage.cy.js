import Papa from 'papaparse';
describe('Subnet / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathSubnet()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/subnet')
        cy.wait(2000)
    })

    it('Usabilities (User go to Manage Subnet page. The system display :)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Subnet');
            cy.get('.back-to-main-page').contains('Back').should('be.visible');
            cy.get('.btn').contains('Delete').should('be.visible');
        });
        cy.contains('.card', 'Subnet Information').within(() => {
            cy.get('.card-header').contains('Subnet Information');
            cy.get('.btn').contains('Edit').should('be.visible');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Private Network').should('have.text', 'Private Network')
            cy.contains('label', 'Private Network IPv4 CIDR').should('have.text', 'Private Network IPv4 CIDR')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description').should('have.text', 'Description')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Gateway').should('have.text', 'Gateway')
            cy.contains('label', 'DNS Server Address 1').should('have.text', 'DNS Server Address 1')
            cy.contains('label', 'DNS Server Address 2').should('have.text', 'DNS Server Address 2')
            cy.contains('label', 'DNS Server Address 3').should('have.text', 'DNS Server Address 3')
            cy.contains('label', 'DNS Server Address 4').should('have.text', 'DNS Server Address 4')
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

    it('Usabilities (User click Cancel button. The system close form edit volume)', () => {
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit').click();
        cy.wait(200)
        cy.get('.btn').contains('Cancel').click();
        cy.wait(700)
    })


    it('Usabilities (User try edit Subnet. User edit data Subnet succeed.)', () => {

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

                const name = row.nameEdit
                const description = row.descriptionEdit

                cy.get('#name').clear().type(name);
                cy.get('#description').type(description);
                cy.wait(200)
                cy.get('.btn').contains('Save').click();
                cy.wait(700)
            })
        })

        cy.wait(700);
    })

    it('Usabilities (User click hyperlink Private Network. The system direct to Private Network page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        
        cy.get('[href="/network/private-network"]').click();
        cy.wait(500)
        cy.get('.header-24').contains('Private Network');

        cy.wait(700);
    })

    it('Usabilities (User click Back button. The system redirect to Subnet page)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        
        cy.get('.back-to-main-page').contains('Back').click();
        cy.wait(500)
        cy.get('.header-24').contains('Subnet');

        cy.wait(700);
    })
})