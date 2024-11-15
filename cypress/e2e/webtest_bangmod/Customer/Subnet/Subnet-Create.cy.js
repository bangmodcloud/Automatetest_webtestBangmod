import Papa from 'papaparse';
describe('Subnet / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathSubnet()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/subnet')
        cy.wait(2000)
    })

    it('Usabilities (User go to Subnet page. The system display :)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(500)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Subnet');
            cy.get('.back-to-main-page').contains('Cancel').should('be.visible');
            cy.get('.btn').contains('Create').should('be.visible');
        });
        cy.contains('.card', 'Subnet').within(() => {
            cy.get('.sub-title-16').contains('Subnet');
            cy.contains('label', 'Private Network').should('have.text', 'Private Network')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Gateway').should('have.text', 'Gateway')
            cy.contains('label', 'DNS Server Address 1').should('have.text', 'DNS Server Address 1')
            cy.contains('label', 'DNS Server Address 2').should('have.text', 'DNS Server Address 2')
            cy.contains('label', 'DNS Server Address 3 (Optional)').should('have.text', 'DNS Server Address 3 (Optional)')
            cy.contains('label', 'DNS Server Address 4 (Optional)').should('have.text', 'DNS Server Address 4 (Optional)')

        });

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(200)
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Please input data');

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please select data”)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(200)
        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Subnet/dataSubnet.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                cy.get('#ipv4cidr').type(row.ipv4cidr)

            })
        })
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Please select data');

        cy.wait(700);

    })

    it('Varidation (User specified an invalid IPv4 CIDR. The system displays an error message “ Please input valid CIDR Notation”)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(200)
        cy.get('.ant-select-selector').click();
        cy.get('.ant-select-item-option-content').eq(0).click(); //Private Network

        cy.get('#ipv4cidr').type('1')
        cy.get('.danger').contains('Please input valid CIDR Notation');

        cy.wait(700);
    })

    it('Varidation (The specified IPv4 CIDR subnet is not in the Private Network loop. The system displays an error message “ Please input valid network address in range”)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(200)
        cy.get('.ant-select-selector').click();
        cy.get('.ant-select-item-option-content').eq(0).click(); //Private Network

        cy.get('#ipv4cidr').type('10.0.0.1/24')
        cy.get('.danger').contains('Please input valid network address in range');

        cy.wait(700);
    })

    it('Usabilities (User click Cancel button. The system redirect to Subnet page.)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(500)
        cy.get('.back-to-main-page').contains('Cancel').click();
        cy.wait(200)
        cy.get('.header-24').should('have.text', 'Subnet')
        cy.wait(700);
    })

    it('Usabirities (User try Create Subnet. User Create Subnet succeed.)', () => {

        cy.get('.btn').contains('Create Subnet').click();
        cy.wait(200)

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Subnet/dataSubnet.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const description = row.description;
                const ipv4cidr = row.ipv4cidr;
                const name = row.nameSubnet;

                cy.get('.ant-select-selector').click();
                cy.get('.ant-select-item-option-content').eq(0).click(); //Private Network
                cy.get('#name').clear().type(name)
                cy.get('#description').type(description);
                cy.get('#ipv4cidr').type(ipv4cidr)

            })
        })
        cy.get('.btn').contains('Create').click();
        cy.wait(700);
    })
})