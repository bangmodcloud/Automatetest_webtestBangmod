import Papa from 'papaparse';
describe('Network / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathNetwork()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/network-interface')
        cy.wait(2000)
    })

    it('Usabilities (User go to Network Interface page. The system display :)', () => {

        cy.get('.header-24').contains('Network Interface');
        cy.get('.btn').contains('Create Network Interface').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Attached Device','Fixed IP','MAC Address','Qos Policy','Status','Admin State')

        cy.wait(700);
    })

    it('Usabilities (User searches by Name, Attached Device, Fixed IP, MAC Address. The system will display the searched items.)', () => {

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const name = row.searchName;
                const network = row.searchNetwork;
                const attachedDevice = row.searchAttachedDevice;
                const fixedIP = row.searchFixedIP;
                const MACAddress = row.searchMACAddress;

                cy.get('#search').type(name) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', name)  
                cy.wait(300);

                cy.get('#search').clear().type(network) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(2)
                    .should('contain', network)  
                cy.wait(300);

                cy.get('#search').clear().type(attachedDevice) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(3)
                    .should('contain', attachedDevice)  
                cy.wait(300);

                cy.get('#search').clear().type(fixedIP) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(4)
                    .should('contain', fixedIP)  
                cy.wait(300);

                cy.get('#search').clear().type(MACAddress) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(5)
                    .should('contain', MACAddress)  
                cy.wait(700);
                })
            })
        })


    it('Usabilities (User click caret-up icon Fields Column No, Name, Attached Device, Fixed IP, MAC Address, Status, Admin State. The system will to sort ascending.)', () => {

        cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Attached Device"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Fixed IP"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="MAC Address"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Qos Policy"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Status"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Admin State"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(700);


    })

    it('Usabilities (User click hyperlink column Network. The system direct to Manage Subnet page.)', () => {

        
        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const network = row.searchNetwork;

        cy.get('#search').clear().type(network) 
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(2)
            .should('contain', network)  
        cy.wait(300);
        
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(2)
            .find('.underline-link')
            .invoke('removeAttr', 'target')
            .click();
        cy.wait(500);
        cy.get('.header-24').contains('Manage Subnet');
        cy.wait(700);

            })
        })
    })

    it('Usabilities (User click hyperlink column Attached Device. The system direct to Manage Load Balance page.)', () => {

        
        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const attachedDevice = row.searchAttachedDevice;

        cy.get('#search').clear().type(attachedDevice) 
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(3)
            .should('contain', attachedDevice)  
        cy.wait(300);
        
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(3)
            .find('.underline-link')
            .invoke('removeAttr', 'target')
            .click();
        cy.wait(500);
        cy.get('.header-24').contains('Manage Load Balance');
        cy.wait(700);

            })
        })
    })
})