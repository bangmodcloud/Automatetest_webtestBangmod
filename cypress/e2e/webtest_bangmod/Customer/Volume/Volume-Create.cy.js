
describe('Volume / Create', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
    })

    it('Usabilities (User go to Create Volume page. The system display :)', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Create Volume');
            cy.contains('Cancel').should('be.visible')
        })
        cy.contains('.card','1.1 Select volume type and specify the size.').within(() => {
            cy.get('.card-header').contains('1.1 Select volume type and specify the size.');
            cy.get('.ant-table-thead').invoke('text').should('contains','Volume Type','Price (USD)','1 GB / USD / Month','1 GB / USD / Hour')
            cy.contains('label', 'Size').should('have.text', 'Size')
            cy.contains('span', 'GB').should('have.text', 'GB')

        })

        cy.contains('.card','1.2 Provide the volume name and description.').within(() => {
            cy.get('.card-header').contains('1.2 Provide the volume name and description.');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('label', 'Description (Optional)').should('have.text', 'Description (Optional)')

        })

        cy.contains('.card','1.3 Enable automatic backup for this volume?').within(() => {
            cy.get('.card-header').contains('1.3 Enable automatic backup for this volume?');
            cy.get('.ant-table-thead').invoke('text').should('contains','Name','Price (USD)','1 GB / USD / Hour')
            cy.get('.ant-switch').should('be.visible');
            cy.get('.card-body').contains("NOTE: Automatic backups will start at the system's set time. The system will continue to automatically back up the volume file until you disable this feature.")

        })

        cy.contains('.card','Your quota').within(() => {
            cy.get('.card-header').contains('Your quota');
            cy.get('.title-14').contains('Total Volume/Disk')
            cy.get('.title-14').contains('Total Storage Backup')

        })

        cy.contains('.card','Summary Cost').within(() => {
            cy.get('.card-header').contains('Summary Cost');
        })
        cy.wait(700);


    })

    it('Validation (User does not enter fieldinput. The system display error Message "Please input data")', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#name').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);
    })

    it('Validation (User specified the size exceeding the usage quota. The system display error Message "The number of sizes you specified exceeds your usage quota, please specify the number of sizes less than 995 or contact Support.")', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('1000');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('The number of sizes you specified exceeds your usage quota, please specify the number of sizes less than 505 or contact Support.'); //แก้ไขจำนวน Size ก่อน test
        cy.wait(700);
    })

    it('Validation (User entered a number less than 1. The system display error Message "Please enter a number greater than or equal to 1.")', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('0');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter a number greater than or equal to 1.'); //แก้ไขจำนวน Size ก่อน test
        cy.wait(700);
    })

    it('Usabilities (User go to Create Volume page. The system display :)', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('10');
        cy.contains('Next').click();
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
            })

            cy.get('.card-body').within(() => {
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
            })
            cy.get('[type="checkbox"]').should('be.visible');
            cy.get('[for="terms"]').contains('label','I have read and understood this Agreement.')

        })

        cy.contains('.card','Billing Profile').within(() => {
            cy.get('.card-header').contains('Billing Profile');
            cy.contains('span','Total available balance').should('have.text', 'Total available balance')
            cy.get('.btn-primary').contains('Top Up');

        })

        cy.contains('.card','Your quota').within(() => {
            cy.get('.card-header').contains('Your quota');
            cy.get('.title-14').contains('Total Volume/Disk')
            cy.get('.title-14').contains('Total Storage Backup')

        })

        cy.contains('.card','Summary Cost').within(() => {
            cy.get('.card-header').contains('Summary Cost');
        })
        cy.get('.btn').contains('Back');
        cy.get('.btn').contains('Create');

        cy.wait(700);


    })


    it('Validation (User does not check term and condition checkbox. The system displays callout warnning “ Please accept the terms and conditions of service.”)', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('10');
        cy.get('#name').clear().type('Volume-test01');
        cy.contains('Next').click();
        cy.get('[type="submit"]').click();
        cy.get('.callout-danger').contains('Please accept the terms and conditions of service.')
        cy.wait(700);
    })

    it('Usabilities (User click Back Button. The system will return to the step Select a Volume type and enter additional details”)', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('10');
        cy.get('#name').clear().type('Volume-test01');
        cy.contains('Next').click();
        cy.wait(500);
        cy.get('.btn').contains('Back').click();
        cy.wait(700);
    })

    it('Usabilities (User click Back Button. The system will return to the step Select a Volume type and enter additional details”)', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('10');
        cy.get('#name').clear().type('Volume-test01');
        cy.contains('Next').click();
        cy.wait(500);
        cy.get('.btn-primary').contains('Top Up').invoke('removeAttr','target').click();
        cy.wait(500);
        cy.get('.header-24').contains('Top Up');
        cy.wait(700);
    })

    it('Action success', () => {

        cy.contains('Create Volume').click();
        cy.wait(200)
        cy.get('#size').type('10');
        cy.get('#name').clear().type('Volume-test01');
        cy.contains('Next').click();
        cy.wait(500);
        cy.get('#terms').check();
        cy.get('[type="submit"]').click();
        cy.wait(700);
        cy.get('.ant-modal-content')
            .contains('.ant-modal-title', 'Save successfully')
            .should('be.visible')
           

    })


})