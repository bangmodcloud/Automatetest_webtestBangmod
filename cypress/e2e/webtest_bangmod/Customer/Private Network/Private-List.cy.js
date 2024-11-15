import Papa from 'papaparse';
describe('Private Network / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathPrivate()
        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/private-network')
    })

    it('Usabilities (User go to Private Network page. The system display :)', () => {

        cy.get('.header-24').contains('Private Network');
        cy.get('.btn').contains('Create Private Network').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Descrition','IPv4 CIDR','Subnet')

        cy.wait(700);
    })

    it('Usabilities (User searches by Name. The system will display the searched items.)', () => {

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                cy.get('#search').type(row.searchNamePrivate) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', row.searchNamePrivate)  
                cy.wait(700);
                })
            })
        })
    it('Usabilities (User click caret-up icon Fields Column No, Name, Fingerprint and Date Added. The system will to sort ascending.)', () => {
       
        cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Description"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="IPv4 CIDR"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(200);
        cy.get('[aria-label="Subnet"] > .ant-table-column-sorters').click().wait(500).dblclick();
        cy.wait(700);


    })
})