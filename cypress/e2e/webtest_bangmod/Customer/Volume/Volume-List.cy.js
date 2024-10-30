describe('Volume / Listing', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathVolume()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/volume')
    })

    it('Usabilities (User go to Volume page. The system display :)', () => {

        cy.get('.header-24').contains('Volume');
        cy.get('.btn').contains('Create Volume').should('be.visible');
        cy.get('#search').should('be.visible');
        cy.get('.ant-table-thead').invoke('text').should('contains','No','Name','Description','Size (GB)','Type','Bootable','Cloud Instance','Status')

        cy.wait(700);
    })

    it('Usabilities (User searches by Name and Cloud Instance. The system will display the searched items.)', () => {
       
        cy.get('#search').type('volume-modvm-rdj49-JX') //เปลี่ยนคำค้นหาก่อน test
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .should('contain', 'volume-modvm-rdj49-JX')  //เปลี่ยนคำค้นหาก่อน test
            cy.wait(700);

        cy.get('#search').clear().type('modvm-bcze0-YK-1')//เปลี่ยนคำค้นหาก่อน test
        cy.get('tbody tr').eq(0)
            .find('td')
            .eq(1)
            .should('contain', 'modvm-bcze0-YK-1')  //เปลี่ยนคำค้นหาก่อน test
            cy.wait(700);

    })

    it('Usabilities (User click caret-up icon Fields Column No, Name, Description, Size (GB), Type, Bootable, Cloud Instance, Status. The system will to sort ascending.)', () => {
       
        cy.get('[aria-label="No"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Name"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Description"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Size (GB)"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Type"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Bootable"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Cloud Instance"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(200);
        cy.get('[aria-label="Status"] > .ant-table-column-sorters').click().wait(500).click();
        cy.wait(700);


    })
})