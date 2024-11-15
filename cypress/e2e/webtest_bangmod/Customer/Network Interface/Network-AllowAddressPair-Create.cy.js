import Papa from 'papaparse';
describe('Network / Manage / Allow Address Pair / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathNetwork()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/network-interface')
        cy.wait(2000)
    })

    it('Usabilities (User click Create Allow Address Pair button. The system display : >> can view in test plan <<)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr','target').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Create Allowed Address Pair');
            cy.get('.back-to-main-page').contains('Cancel').should('be.visible');
            cy.get('.btn').contains('Create').should('be.visible');
        });
        cy.contains('.card', 'Allowed Address Pair').within(() => {
            cy.get('.card-header').contains('Allowed Address Pair');
            cy.contains('label', 'IP Address or CIDR').should('have.text', 'IP Address or CIDR')
            cy.contains('label', 'MAC Address (Optional)').should('have.text', 'MAC Address (Optional)')

        });

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr', 'target').click();
        cy.wait(200)
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Please input data');

        cy.wait(700);
    })

    it('Varidation (User specified an IP Address or CIDR. The system displays an error message “ Invalid according to the format of IP Address or CIDR”)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr', 'target').click();
        cy.wait(200)
        cy.get('#ipv4').type('1')
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Invalid according to the format of IP Address or CIDR');

        cy.wait(700);
    })

    it('Varidation (User specified an invalid MAC address. The system displays an error message “ Invalid according to the format of MAC Address”)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr', 'target').click();
        cy.wait(200)
        cy.get('#ipv4').type('10.0.0.0/24')
        cy.get('#macAddress').type('1')
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Invalid according to the format of MAC Address');

        cy.wait(700);
    })

    it('Usabilities (User click Cancel button. The system redirect to Manage Network Interface page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr', 'target').click();
        cy.wait(200)
        cy.get('.back-to-main-page').contains('Cancel').click();
        cy.wait(200)
        cy.get('.header-24').contains('Manage Network Interface');

        cy.wait(700);
    })

    it('Usabilities (User try Create Allow Address Pair. User Create Allow Address Pair succeed)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(200);
        cy.get('.btn').contains('Allowed Address Pair').invoke('removeAttr', 'target').click();
        cy.wait(200)

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                cy.get('#ipv4').type(row.iPV4)
                cy.get('#macAddress').type(row.MACAddress)
                cy.get('.btn').contains('Create').click();
            })
        })

        cy.wait(700);
    })
})