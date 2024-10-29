
import Papa from 'papaparse';
describe('Volume Backup / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolumeBackup()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume-backup')

    })

    it('Usabilities (User go to Create Volume Backup page. The system display :)', () => {
        cy.contains('Create Volume Backup').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Create Volume Backup');
            cy.contains('Cancel').should('be.visible')
        })
        cy.contains('.card', 'Select Volume').within(() => {
            cy.get('.card-header').contains('Select Volume');
            cy.get('.callout-warning').contains('Creating a backup while the volume is in use will capture a Point-In-Time snapshot. Proceed with caution.')
            cy.get('.ant-table-thead').invoke('text').should('contains', 'Name', 'Size (GB)', 'Type', 'Status')

        })

        cy.contains('.card', 'Volume and Volume Backup User Agreement').within(() => {
            cy.get('.card-header').contains('Volume and Volume Backup User Agreement');
            cy.get('.card-body').within(() => {
                cy.get('.title-content-14').contains('Volume');
                cy.get('li')
                    .contains('The cost of using Volume services will depend on the type and capacity of the Volume you choose, charged per hour based on actual usage.')

                cy.get('li')
                    .contains('The system will automatically update credit and balance every end of the month. The balance will be deducted from credit first. In case the number of Credits is insufficient, the system will automatically use the Balance.')

                cy.get('li')
                    .contains('User must keep the balance more than 0 baht, if not the Cloud Server will be force status to Suspend immediately and will be deleted from the system within 5 days from the date of forced suspend status.')

                cy.get('li')
                    .contains('Volume that forced to stop working. Or users who shutdown server the Balance still will be charged as usual.')


                cy.get('.title-content-14').contains('Volume Backup');
                cy.get('li')
                    .contains('The cost of using the Volume Backup service (On-Demand Backup and System Automatic Backup) depends on the size of the volume capacity that will be charged hourly per 1 GB.')

                cy.get('li')
                    .contains('For On-Demand Backup service, the system will automatically update Credit and Balance every day. The system will deducted from Credit first. In case the number of Credits is insufficient, the system will automatically use the Balance.')

                cy.get('li')
                    .contains('For Automatic Backup service, it will be charged daily (24 hours).')

                cy.get('li')
                    .contains('User must maintain the balance more than 0 baht (Credit + Balance), if not the Volume Backup will be forced status to Suspend immediately and will be deleted from the system within 5 days from the date of forced suspend status.')

                cy.get('li')
                    .contains('Volume Backup that forced to stop working. Or users who shutdown server the Balance still will be charged as usual.')

                cy.get('[type="checkbox"]').should('be.visible');
                cy.get('[for="terms"]').contains('label', 'I have read and understood this Agreement.')
            })

        })

        cy.contains('.card', 'Billing Profile').within(() => {
            cy.get('.card-header').contains('Billing Profile');
            cy.contains('span', 'Total available balance').should('have.text', 'Total available balance')
            cy.get('.btn-primary').contains('Top Up');

        })

        cy.contains('.card', 'Your quota').within(() => {
            cy.get('.card-header').contains('Your quota');
            cy.get('.title-14').contains('Total Storage Backup')

        })

        cy.contains('.card', 'Summary Cost').within(() => {
            cy.get('.card-header').contains('Summary Cost');
        })
        cy.wait(700);
    });

    it('Validation (User did not select Volume. The system display error Message "Please select the volume you want to back up.")', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(200)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.get('.callout-danger').contains('Please select the volume you want to back up.');
        cy.wait(700);
    })

    it('Validation (User did not check term and condition check box. The system display error Message "Please accept the terms and conditions of service.")', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(200)
        cy.get('[type="submit"]').click();
        cy.get('.callout-danger').contains('Please accept the terms and conditions of service.');
        cy.wait(700);
    })

    it('Usabillity (User searches for Volume entry by Name / Size / Type. The system displays the searched list.)', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(2000)
        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";
        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                cy.get('#search').type(row.searchNameVolume) //เปลี่ยนคำค้นหาก่อน test
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', row.searchNameVolume)  //เปลี่ยนคำค้นหาก่อน test
                cy.wait(700);

                cy.get('#search').clear().type(row.searchSize) //เปลี่ยนคำค้นหาก่อน test
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', row.searchSize)  //เปลี่ยนคำค้นหาก่อน test
                cy.wait(700);

                cy.get('#search').clear().type(row.searchType) //เปลี่ยนคำค้นหาก่อน test
                cy.get('tbody tr').eq(0)
                    .find('td')
                    .eq(1)
                    .should('contain', row.searchType)  //เปลี่ยนคำค้นหาก่อน test
                cy.wait(700);

            })
        })
    })

    it('Usabillity (User click Add button. The system open new tab leads to Create Volume page.)', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(2000)
        cy.get('.btn-primary-icon > .btn').invoke('removeAttr', 'target').wait(500).click();
        cy.wait(1000)
        cy.get('.header-24').should('have.text', 'Create Volume')

        cy.wait(700);
    })

    it('Usabillity (User click hyper link Volume Name. The system open new tab leads to Manage your Volume page.)', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(4000)
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .find('a.underline-link')
            .invoke('removeAttr', 'target')
            .wait(500)
            .click();
        cy.wait(200)

        cy.get('.header-24').should('have.text', 'Manage Volume')
        cy.wait(700);
    })

    it('Usabillity (User try Create Volume Backup. User Create Volume Backup succeed)', () => {

        cy.contains('Create Volume Backup').click();
        cy.wait(5000)
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(0)
            .click()
        cy.wait(200)
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);
    })
})
