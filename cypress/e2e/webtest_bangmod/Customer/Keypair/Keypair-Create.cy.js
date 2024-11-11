import Papa from 'papaparse';
describe('Keypair / Create', () => {
    let users;
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.pathKeypair()

        cy.wait(2000)
        cy.visit('https://bangmod-dev-web-v2.dev.bangmod.cloud/cloud-server/keypair')

    })

    it('Usabilities (User go to Create Keypair page. The system display :)', () => {

        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.get('.sticky-header').within(() => {
            cy.get('.header-24').contains('Create Keypair');
            cy.get('.btn').contains('Create').should('be.visible');
            cy.contains('Cancel').should('be.visible')
        })
        cy.get('.card').within(() => {
            cy.get('.card-header').contains('Keypair Information');
            cy.contains('label', 'Name').should('have.text', 'Name')
            cy.contains('[for="import"]', 'Import Keypair').should('be.visible');
            cy.get('#import').should('be.checked');
            cy.contains('[for="generate"]', 'Generate Keypair').should('be.visible');
            cy.contains('label', 'Attach files : Only 1 file .txt or .pub').should('have.text', 'Attach files : Only 1 file .txt or .pub')
            cy.contains('label', 'Public Key').should('have.text', 'Public Key')
            cy.contains('label', 'Upload File').should('have.text', 'Upload File')

        })
        cy.wait(700);


    })

    it('Usabilities (User does not enter fieldinput. The system display error Message "Please input data")', () => {

        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.get('#name').clear();
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please input data');
        cy.wait(700);
    })

    it('Usabilities (User enters name in Thai language. The system display error Message "Please input data"Please enter information in English only.")', () => {

        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.get('#name').clear().type('ทดสอบ');
        cy.get('[type="submit"]').click();
        cy.get('.text-danger').contains('Please enter information in English only.');
        cy.wait(700);
    })

    it('Usabilities (User try Create Keypair by Import Keypair. User Create Keypair by Import Keypair succeed.)', () => {
        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const namekeypairImport = row.namekeypairImport;
                cy.get('#name').clear().type(row.namekeypairImport);
                cy.get('[for="keypair-file"]').click().selectFile('cypress/fixtures/testprivatekey.txt');
                cy.get('[type="submit"]').click();
                cy.wait(700);
            })
        })

    })

    it('Usabilities (User click radio-btn "Generate Keypair". The system display :)', () => {

        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.get('#generate').click().should('be.checked');
        cy.contains('[for="generate"]', 'Generate Keypair').should('be.visible');
        cy.get('.btn').contains('Generate').should('be.visible');
        cy.contains('label', 'Public Key').should('have.text', 'Public Key')
        cy.wait(700);


    })

    it('Usabilities (User try Create Keypair by Generate Keypair". User Create Keypair by Generate Keypair succeed.)', () => {

        const csvFilePath = "cypress/e2e/webtest_bangmod/Customer/Keypair/dataKeypair.csv";
        cy.contains('Create Keypair').click();
        cy.wait(200)
        cy.readFile(csvFilePath).then(csvData => {
            const data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true,
            }).data;
            data.forEach((row) => {
                const nameKeypairGenerate = row.nameKeypairGenerate;
                cy.get('#name').clear().type(row.nameKeypairGenerate);
                cy.get('#generate').click().should('be.checked');
                cy.contains('[for="generate"]', 'Generate Keypair').should('be.visible');
                cy.get('.btn').contains('Generate').click();
                cy.wait(700);
                cy.get('[type="submit"]').click();
                cy.wait(700);
            })
        })


    })

})