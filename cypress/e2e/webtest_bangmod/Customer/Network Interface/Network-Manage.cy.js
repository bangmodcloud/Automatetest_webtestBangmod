import Papa from 'papaparse';
describe('Network / Manage', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathNetwork()
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/network/network-interface')
        cy.wait(2000)
    })

    it('Usabilities (User go to Manage Network Interface page. The system display : >> can view in test plan <<)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Manage Network Interface');
            cy.get('.back-to-main-page').contains('Back').should('be.visible');
            cy.get('.btn').contains('Delete').should('be.visible');
        });
        cy.contains('.card', 'General Information').within(() => {
            cy.get('.card-header').contains('General Information');
            cy.get('.btn').contains('Edit Name').should('be.visible');
            cy.contains('label', 'No').should('have.text', 'No')
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Status').should('have.text', 'Status')
            cy.contains('label', 'QoS Policy').should('have.text', 'QoS Policy')
            cy.contains('label', 'MAC Address').should('have.text', 'MAC Address')
            cy.contains('label', 'Port Security').should('have.text', 'Port Security')

        });

        cy.contains('.card', 'Network Information').within(() => {
            cy.get('.card-header').contains('Network Information');
            cy.contains('label', 'IP Address').should('have.text', 'IP Address')
            cy.contains('label', 'Subnet').should('have.text', 'Subnet')

        });

        cy.contains('.card', 'Security Group').within(() => {
            cy.get('.card-header').contains('Security Group');
            cy.contains('label', 'Security Group').should('have.text', 'Security Group')

        });

        cy.wait(700);
    })

    it('Usabilities (User click Edit button. The system open to edit data)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit Name').click();
        cy.wait(200)
        cy.get('#edit-nic-general-info').should('be.visible')

        cy.wait(700);
    })

    it('Varidation (User does not enter Name. The system displays an error message “ Please input data”)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit Name').click();
        cy.wait(200)
        cy.get('#name').clear();
        cy.get('.btn').contains('Save').click();
        cy.get('.danger').contains('Please input data');

        cy.wait(700);
    })

      it('Usabilities (User click Cancel button. The system close form edit Name Network Interface)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit Name').click();
        cy.wait(200)
        cy.get('.btn').contains('Cancel').click();
        cy.get('.ant-modal-content').within(() => {
            cy.contains('.ant-modal-title', 'Are you sure to leave information updating?')
                .should('be.visible')
                .get('.ant-modal-body')
                .contains('Changes you made may not be saved')
                .wait(300)
            cy.contains('button', 'No').click();
        })


        cy.wait(700);
    })

    it('Usabilities (User try edit Network Interface. User edit data Network Interface succeed.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.get('.btn').contains('Edit Name').click();

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Network Interface/dataNetworkInterface.csv";

        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {

                const nameEdit = row.nameNetworkEdit

                cy.get('#name').clear().type(nameEdit);
                cy.wait(200)
                cy.get('.btn').contains('Save').click();
            })
        })

        cy.wait(700);
    })

    it('Usabilities (User click hyperlink Subnet. The system direct to Manage Subnet page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.contains('.card', 'Network Information').within(() => {
            cy.get('.card-header').contains('Network Information');
            cy.get('.underline-link').invoke('removeAttr','target').click();
        });
        cy.wait(500)
        cy.get('.header-24').contains('Manage Subnet');

        cy.wait(700);
    })

    it('Usabilities (User click hyperlink Security Group. The system direct to Mange Security Group page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.contains('.card', 'Security Group').within(() => {
            cy.get('.card-header').contains('Security Group');
            cy.get('.underline-link').invoke('removeAttr','target').click();
        });
        cy.wait(1000)
        cy.get('.header-24').contains('Manage Security Group');

        cy.wait(700);
    })

     it('Usabilities (User click Edit button on card"Security Group". The system direct to Edit Security Group page.)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)
        cy.contains('.card', 'Security Group').within(() => {
            cy.get('.card-header').contains('Security Group');
            cy.get('.btn').contains('Edit').click();
        });
        cy.wait(1000)
        cy.get('.header-24').contains('Edit Security Group');

        cy.wait(700);
    })

    it('Usabilities (User click Back button. The system redirect to Network Interface page)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.get('.back-to-main-page').contains('Back').click();
        cy.wait(500)
        cy.get('.header-24').contains('Network Interface');

        cy.wait(700);
    })

    it('Usabilities (User go to tab Allowed Address Pair. The system display : >> can view in test plan <<)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.get('.nav-tabs').contains('Allowed Address Pair').click();
        cy.wait(300);
        cy.get('#search').should('be.visible');
        cy.get('.btn').contains('Allowed Address Pair').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','IP Address or CIDR','MAC Address',)

        cy.wait(700);
    })

    it('Usabilities (User go to tab Floating IP. The system display : >> can view in test plan <<)', () => {

        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .click();
        cy.wait(200)

        cy.get('.nav-tabs').contains('Floating IP').click();
        cy.wait(300);
        cy.get('#search').should('be.visible');
        cy.get('.btn').contains('Associate Floating IP').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains', 'No', 'Name', 'Description','Status')

        cy.wait(700);
    })
})