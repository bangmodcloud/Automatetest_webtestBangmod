import Papa from 'papaparse';
describe('Subnet / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathSubnet()
        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/subnet')
    })

    it('Usabilities (User go to Subnet page. The system display :)', () => {

        cy.get('.header-24').contains('Subnet');
        cy.get('.btn').contains('Create Subnet').should('be.visible');
        cy.get('.ant-select-selector').contains('All Private Network').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Description','IPv4 CIDR','Private Network')

        cy.wait(700);
    })

    it('Usabilities (User searches by Name. The system will display the searched items.)', () => {

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Subnet/dataSubnet.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                cy.get('#search').type(row.searchName) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', row.searchName)  
                cy.wait(700);
                })
            })
        })

    it('Usabilities (User searches by Name. The system will display the searched items.)', () => {

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Subnet/dataSubnet.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const filter = row.filterPeivate;

                cy.get('.ant-select-selector').click();
                cy.get(filter).click();

                })
            })
        })


    it('Usabilities (User click caret-up icon Fields Column No, Name, Description, IPv4 CIDR, Private Network. The system will to sort ascending.)', () => {

        cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Description"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="IPv4 CIDR"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Private Network"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(700);


    })

    it('Usabilities (User click hyperlink column Private Network. The system direct to Manage Private Network page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(4)
            .click();
        cy.wait(500);
        cy.get('.header-24').contains('Manage Private Network');
        cy.wait(700);


    })
})