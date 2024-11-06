import Papa from 'papaparse';
describe('Volume Backup / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolumeBackup()

        cy.wait(2000)

    })

    context('tab On-Demand Backup', () => {

        it('Usabilities (User go to Volume page. The system display :)', () => {

            cy.get('.header-24').contains('Volume Backup');
            cy.get('.btn').contains('Create Volume Backup').should('be.visible');
            cy.get('.nav-tabs').contains('On-Demand Backup').should('be.visible');
            cy.get('.nav-tabs').contains('System Automatic Backup').should('be.visible');
            cy.get('#search').should('be.visible');
            cy.get('.ant-table-thead').invoke('text').should('contains', 'No', 'Name', 'Description', 'Size (GB)', 'Create Date (GMT+7)', 'Volume', 'Status')

            cy.wait(700);
        })

        it('Usabilities (User searches by  Name, Size, Create Date, Volume The system will display the searched items.)', () => {
            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    cy.get('#search').type(row.searchNameVolumeBackup) //เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(1)
                        .should('contain', row.searchNameVolumeBackup)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                    const searchDateTime = `${row.searchDate} , ${row.searchTime}`

                    cy.get('#search').clear().type(searchDateTime)//เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(4)
                        .should('contain', searchDateTime)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                    cy.get('#search').type(row.searchNameVolume) //เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(5)
                        .should('contain', row.searchNameVolume)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                })
 

            })
        })

        it('Usabilities (User click caret-up icon Fields Column No, Name, Description, Size (GB), Create Date (GMT+7), Volume, Status. The system will to sort ascending.)', () => {

            cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Description"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Size (GB)"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Create Date (GMT+7)"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Volume"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Status"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(700);


        })
    })

    context('tab System Automatic Backup', () => {

        it('Usabilities (User go to Volume page. The system display :)', () => {

            cy.get('.nav-tabs').contains('System Automatic Backup').click();
            cy.wait(300);
            cy.get('.header-24').contains('Volume Backup');
            cy.get('.btn').contains('Create Volume Backup').should('be.visible');
            cy.get('.nav-tabs').contains('On-Demand Backup').should('be.visible');
            cy.get('.nav-tabs').contains('System Automatic Backup').should('be.visible');
            cy.get('#search').should('be.visible');
            cy.get('.ant-table-thead').invoke('text').should('contains', 'No', 'Name', 'Description', 'Size (GB)', 'Create Date (GMT+7)', 'Volume', 'Status')

            cy.wait(700);
        })

        it('Usabilities (User searches by  Name, Size, Create Date, Volume The system will display the searched items.)', () => {

            cy.get('.nav-tabs').contains('System Automatic Backup').click();
            cy.wait(300);

            const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Volume Backup/dataVolumeBackup.csv";
            cy.readFile(csvFilePath).then(csvData => {
                const data = Papa.parse(csvData, {
                    header: true,
                    skipEmptyLines: true,
                }).data;
                data.forEach((row) => {
                    cy.get('#search').type(row.searchNameTabAutomatic) //เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(1)
                        .should('contain', row.searchNameTabAutomatic)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                    const searchDateTime = `${row.searchDateTabAutomatic} , ${row.searchTimeTabAutomatic}`

                    cy.get('#search').clear().type(searchDateTime)//เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(4)
                        .should('contain', searchDateTime)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                    cy.get('#search').type(row.searchVolumeTabAutomatic) //เปลี่ยนคำค้นหาก่อน test
                    cy.get('tbody tr').eq(0)
                        .find('td')
                        .eq(5)
                        .should('contain', row.searchVolumeTabAutomatic)  //เปลี่ยนคำค้นหาก่อน test
                    cy.wait(700);

                })
            })
        })

        it('Usabilities (User click caret-up icon Fields Column No, Name, Description, Size (GB), Create Date (GMT+7), Volume, Status. The system will to sort ascending.)', () => {

            cy.get('.nav-tabs').contains('System Automatic Backup').click();
            cy.wait(300);
            cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Description"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Size (GB)"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Create Date (GMT+7)"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Volume"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(200);
            cy.get('[aria-label="Status"] > .ant-table-column-sorters').click().wait(500).click();
            cy.wait(700);


        })
    })
})
