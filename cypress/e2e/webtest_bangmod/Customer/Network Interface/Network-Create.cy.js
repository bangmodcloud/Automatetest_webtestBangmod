import Papa from 'papaparse';
describe('Network / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathNetwork()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/network-interface')
        cy.wait(2000)
    })

    it('Usabilities (User go to Network Interface page. The system display :)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Network Interface');
            cy.get('.back-to-main-page').contains('Cancel').should('be.visible');
            cy.get('.btn').contains('Create').should('be.visible');
        });
        cy.contains('.card', 'Network Interface Information').within(() => {
            cy.get('.card-header').contains('Network Interface Information');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Private Network').should('have.text', 'Private Network')
            cy.contains('label', 'Subnet').should('have.text', 'Subnet')
            cy.contains('label', 'Select Option Specify IP Address').should('have.text', 'Select Option Specify IP Address')
            cy.get('.choice').eq(0).within(() => {
                cy.get('[type="radio"]').should('be.visible');
                cy.get('#unspecified').should("be.checked");
                cy.contains('label', 'Unspecified');
            })
            cy.get('.choice').eq(1).within(() => {
                cy.get('[type="radio"]').should('be.visible');
                cy.contains('label', 'Fixed IP Address');
            })
            cy.contains('label', 'MAC Address (Optional)').should('have.text', 'MAC Address (Optional)')

        });
        cy.contains('.card', 'Security Group (Optional)').within(() => {
            cy.get('.card-header').contains('Security Group (Optional)');
            cy.get('.callout').contains('You can assign a maximum of 5 security groups to a network.');
            cy.get('#search').should('be.visible');
            cy.get('.btn-primary-icon').should('be.visible');
            cy.get('.ant-table-thead').invoke('text').should('contains','Name','Description');

        });

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)
        cy.get('#name').clear();
        cy.get('.ant-select-selector').eq(0).click(); //Private Network
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.wait(500)
        cy.get('.ant-select-selector').eq(1).click(); // Subnet
        cy.get('.ant-select-item-option-content').last().click();

        cy.get('#fixed-ip-address').check()
        cy.get('.btn').contains('Create').click();
        cy.get('.text-danger').contains('Please input data');

        cy.wait(700);
    })

    it('Varidation (User does not select Private Network and Subnet. The system displays an error message “ Please select data”)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)

        cy.get('.btn').contains('Create').click();
        cy.get('.text-danger').contains('Please select data');

        cy.wait(700);
    })

    it('Usabilities (User select Fixed IP Address radio. The system display textfield IP Address.)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)

        cy.get('#fixed-ip-address').check()
        cy.get('#fixedIp').should('be.visible');

        cy.wait(700);
    })

    it('Varidation (User specified an invalid MAC address. The system displays an error message “ Invalid according to the format of MAC Address”)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)
        cy.get('#macAddress').type('1')
        cy.get('.text-danger').contains('Invalid according to the format of MAC Address');

        cy.wait(700);
    })

    it('Varidation (User specified an IP Address not within the selected Subnet. The system displays an error message “ Please specify an IP Address in the selected Subnet”)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)
        cy.get('.ant-select-selector').eq(0).click(); //Private Network
        cy.get('.ant-select-item-option-content').eq(0).click();
        cy.wait(500)
        cy.get('.ant-select-selector').eq(1).click(); // Subnet
        cy.get('.ant-select-item-option-content').last().click();
        cy.get('#fixed-ip-address').check()
        cy.get('#fixedIp').type('172.16.0.0')
        cy.get('.text-danger').contains('Please specify an IP Address in the selected Subnet');

        cy.wait(700);
    })


    it('Usabirities (User searches for the Security Group entry by Security Group Name. The system displays the searched list.)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const securityGroup = row.searchSecurityGroup;

                cy.get('#search').type(securityGroup) 
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', securityGroup)  
                cy.wait(300);
            })
        })

        cy.wait(700);
    })

    it('Usabirities (User click Add button on card Security Group (Optional). The system open new tab leads to Create Security Group page.)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)

        cy.get('[href="/network/security-group/new"]').invoke('removeAttr', 'target').click();
        cy.get('.semibold').contains('Create Security Group')

        cy.wait(700);
    })

    it('Usabilities (User click Cancel button. The system redirect to Subnet page.)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(500)
        cy.get('.back-to-main-page').contains('Cancel').click();
        cy.wait(200)
        cy.get('.header-24').should('have.text', 'Network Interface')
        cy.wait(700);
    })


    it('Usabirities (User try Create Network Interface. User Create Network Interface succeed.)', () => {

        cy.get('.btn').contains('Create Network Interface').click();
        cy.wait(200)

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const name = row.nameNetwork;
                const MACAddress = row.MACAddress;

                cy.get('#name').clear().type(name)
                cy.get('.ant-select-selector').eq(0).click(); //Private Network
                cy.get('.ant-select-item-option-content').eq(0).click();
                cy.wait(500)
                cy.get('.ant-select-selector').eq(1).click(); // Subnet
                cy.get('.ant-select-item-option-content').last().click();
                cy.get('#macAddress').type(MACAddress)

                cy.contains('.card', 'Security Group (Optional)').within(() => {
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(0)
                        .click()
                    cy.wait(300);
                })
            })
        })
       cy.get('.btn').contains('Create').click();
        cy.wait(700);
    })
})