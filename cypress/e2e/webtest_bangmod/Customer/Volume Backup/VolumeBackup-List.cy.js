describe('Volume Backup / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolumeBackup()

        cy.wait(2000)

    })

    it('Usabilities (User go to Volume page. The system display :)', () => {

        cy.get('.header-24').contains('Volume Backup');
        cy.get('.btn').contains('Create Volume Backup').should('be.visible');
        cy.get('.nav-tabs').contains('On-Demand Backup').should('be.visible');
        cy.get('.nav-tabs').contains('System Automatic Backup').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Description','Size (GB)','Create Date (GMT+7)','Volume','Status')

        cy.wait(700);
    })

    it('Usabilities (User searches by  Name, Size, Create Date, Volume The system will display the searched items.)', () => {
       
        cy.get('#search').type('backup-volume-447AOaKb') //เปลี่ยนคำค้นหาก่อน test
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .should('contain', 'backup-volume-447AOaKb')  //เปลี่ยนคำค้นหาก่อน test
            cy.wait(700);

        cy.get('#search').clear().type('10/09/2024 , 09:31')//เปลี่ยนคำค้นหาก่อน test
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .should('contain', '10/09/2024 , 09:31')  //เปลี่ยนคำค้นหาก่อน test
            cy.wait(700);

        cy.get('#search').clear().type('volume-modvm-h414g-HQ')//เปลี่ยนคำค้นหาก่อน test
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(5)
            .should('contain', 'volume-modvm-h414g-HQ')  //เปลี่ยนคำค้นหาก่อน test
            cy.wait(700);

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