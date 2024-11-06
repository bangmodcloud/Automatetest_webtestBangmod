import Papa from 'papaparse';
describe('Private Network / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathPrivate()
        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/private-network')
    })

    it('Usabilities (User go to Private Network page. The system display :)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Private Network');
            cy.get('.back-to-main-page').contains('Cancel').should('be.visible');
            cy.get('.btn').contains('Create').should('be.visible');
        });
        cy.contains('.card', 'Private Network Information').within(() => {
            cy.get('.sub-title-16').contains('Private Network Information');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')

        });
        cy.contains('.card', 'Default Subnet').within(() => {
            cy.get('.sub-title-16').contains('Default Subnet');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Gateway').should('have.text', 'Gateway')
            cy.contains('label', 'DNS Server Address 1').should('have.text', 'DNS Server Address 1')
            cy.contains('label', 'DNS Server Address 2').should('have.text', 'DNS Server Address 2')
            cy.contains('label', 'DNS Server Address 3 (Optional)').should('have.text', 'DNS Server Address 3 (Optional)')
            cy.contains('label', 'DNS Server Address 4 (Optional)').should('have.text', 'DNS Server Address 4 (Optional)')

        });
        cy.get('.btn').contains('Add Subnet').should('be.visible');

        cy.wait(700);
    })

      it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)
        cy.get('.btn').contains('Create').click();
        cy.get('.danger').contains('Please input data');

        cy.wait(700);
    })

    it('Varidation (User specified an invalid IPv4 CIDR. The system displays an error message “ Please input valid CIDR Notation”)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)
        cy.contains('.card', 'Private Network Information').within(() => {
            cy.get('#ipv4cidr').type('1')
            cy.get('.danger').contains('Please input valid CIDR Notation');
        });
        cy.contains('.card', 'Default Subnet').within(() => {
            cy.get('#ipv4cidr').type('1')
            cy.get('.danger').contains('Please input valid CIDR Notation');
        })

        cy.wait(700);
    })

    it('Varidation (The specified IPv4 CIDR subnet is not in the Private Network loop. The system displays an error message “ Please input valid network address in range”)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)
        cy.contains('.card', 'Private Network Information').within(() => {
            cy.get('#ipv4cidr').type('10.0.0.0/24')
        });
        cy.contains('.card', 'Default Subnet').within(() => {
            cy.get('#ipv4cidr').type('10.0.0.1/24')
            cy.get('.danger').contains('Please input valid network address in range');
        })

        cy.wait(700);
    })

    it('Usabirities (User click Add Subnet button. The system displays card Subnet)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)

        cy.get('.btn').contains('Add Subnet').click();

        cy.get('.card').eq(2).within(() => {
            cy.get('.sub-title-16').contains('Subnet');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')
            cy.contains('label', 'IPv4 CIDR').should('have.text', 'IPv4 CIDR')
            cy.contains('label', 'Gateway').should('have.text', 'Gateway')
            cy.contains('label', 'DNS Server Address 1').should('have.text', 'DNS Server Address 1')
            cy.contains('label', 'DNS Server Address 2').should('have.text', 'DNS Server Address 2')
            cy.contains('label', 'DNS Server Address 3 (Optional)').should('have.text', 'DNS Server Address 3 (Optional)')
            cy.contains('label', 'DNS Server Address 4 (Optional)').should('have.text', 'DNS Server Address 4 (Optional)')
        })

        cy.wait(700);
    })


    it('Varidation (The specified IPv4 CIDR subnet Overlap. The system display Modal Error)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)
        cy.contains('.card', 'Private Network Information').within(() => {
            cy.get('#ipv4cidr').type('10.0.0.0/24')
        });
        cy.contains('.card', 'Default Subnet').within(() => {
            cy.get('#ipv4cidr').type('10.0.0.0/24')
        })

        cy.get('.btn').contains('Add Subnet').click();

        cy.get('.card').eq(2).within(() => {
            cy.get('.sub-title-16').contains('Subnet');
            cy.get('#ipv4cidr').type('10.0.0.0/24');
        })
        cy.get('.btn').contains('Create').click();

        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Error')
                .should('be.visible')
            cy.get('.ant-modal-body').within(() => {
                cy.contains('Failed creation.')
                cy.contains('IPv4 CIDR Subnet overlapping. Modify IPv4 CIDR Subnet and try again.')
            })
        })

        cy.wait(700);
    })

    it('Usabirities (User try Create Private Network. User Create Private Network succeed.)', () => {

        cy.get('.btn').contains('Create Private Network').click();
        cy.wait(200)

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Private Network/dataPrivate.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const description = row.description;
                const ipv4cidr = row.ipv4cidr;
                const subnetDescription = row.subnetDescription;
                const subnetIpv4cidr = row.subnetIpv4cidr;

                cy.contains('.card', 'Private Network Information').within(() => {
                    cy.get('.sub-title-16').contains('Private Network Information');
                    cy.get('#description').type(description);
                    cy.get('#ipv4cidr').type(ipv4cidr)
        
                });
                cy.contains('.card', 'Default Subnet').within(() => {
                    cy.get('.sub-title-16').contains('Default Subnet');
                    cy.get('#description').type(subnetDescription);
                    cy.get('#ipv4cidr').type(subnetIpv4cidr)
        
                });

            })
        })
       cy.get('.btn').contains('Create').click();
        cy.wait(700);
    })
})