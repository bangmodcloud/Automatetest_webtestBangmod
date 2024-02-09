describe('Customer Account / Quota tab', () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.loginOffice()
        cy.wait(2000);

    })

    context('Cloud Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(1) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear({force: true});
            cy.get('#cloud-ram-quota').clear({force: true});
            cy.get('#cloud-cpu-quota').clear({force: true});
            cy.get('[type="submit"]').click({force: true} );
            cy.get('.text-danger').contains('Please input data');

            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(1) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Cloud Quota card

            cy.get('#cloud-instance-quota').clear().type(1);
            cy.get('#cloud-ram-quota').clear().type(1);
            cy.get('#cloud-cpu-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (20) used by this user.');
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (64) used by this user.');
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (32) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(1) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Cloud Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(1) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear().type('30');
            cy.get('#cloud-ram-quota').clear().type('128');
            cy.get('#cloud-cpu-quota').clear().type('120');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(1) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Cloud Quota card
            cy.get('#cloud-instance-quota').clear().type('30');
            cy.get('#cloud-ram-quota').clear().type('128');
            cy.get('#cloud-cpu-quota').clear().type('120');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button', 'Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Volume Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(2) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Quota card
            cy.get('#volume-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(2) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Quota card
            cy.get('#volume-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (1024) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(2) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(2) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Quota card
            cy.get('#volume-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(2) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Quota card
            cy.get('#volume-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Volume Backup Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(3) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Backup Quota card
            cy.get('#volume-backup-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(3) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Backup Quota card
            cy.get('#volume-backup-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (1024) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(3) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Backup Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(3) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Backup Quota card
            cy.get('#volume-backup-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(3) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Volume Backup Quota card
            cy.get('#volume-backup-quota').clear().type('1025');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Floating IP Quota', () => {

            it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

                cy.get('#user-management-customer').click();
                cy.get('#search').type('pla01@gmail.com',{force: true});
                cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
                cy.wait(2000);
                cy.get(':nth-child(4) > .px-0').click({ force: true });
                cy.get(':nth-child(4) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Floating IP Quota card
                cy.get('#floating-ip-quota').clear();
                cy.get('[type="submit"]').click();
                cy.get('.text-danger').contains('Please input data');
                cy.wait(700);

            })

            it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

                cy.get('#user-management-customer').click();
                cy.get('#search').type('pla01@gmail.com',{force: true});
                cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
                cy.wait(2000);
                cy.get(':nth-child(4) > .px-0').click({ force: true });
                cy.get(':nth-child(4) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Floating IP Quota card
                cy.get('#floating-ip-quota').clear().type(1);
                cy.get('[type="submit"]').click();
                cy.get('.text-danger').contains('Please specify a number greater than the current usage (3) used by this user.');

                cy.wait(700);

            })

            it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

                cy.get('#user-management-customer').click();
                cy.get('#search').type('pla01@gmail.com',{force: true});
                cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
                cy.wait(2000);
                cy.get(':nth-child(4) > .px-0').click({ force: true });
                cy.get(':nth-child(4) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Floating IP Quota card
                cy.wait(300);
                cy.contains('Cancel').click()

                cy.wait(700);

            })

            it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

                cy.get('#user-management-customer').click();
                cy.get('#search').type('pla01@gmail.com',{force: true});
                cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
                cy.wait(2000);
                cy.get(':nth-child(4) > .px-0').click({ force: true });
                cy.get(':nth-child(4) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Floating IP Quota card
                cy.get('#floating-ip-quota').clear().type('4');
                cy.get('[type="submit"]').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Change Default Quota?')
                    .wait(300)

                cy.wait(700);

            })

            it('Action success', () => {

                cy.get('#quota').click();
                cy.get(':nth-child(4) > .card > .justify-content-between > .app_renderer_nt_lib_button__nt-button-style > .btn').click(); //Edit Floating IP Quota card
                cy.get('#floating-ip-quota').clear().type('4');
                cy.get('[type="submit"]').click();
                cy.get('.modal-content')
                    .should('be.visible')
                    .and('contain', 'Confirm Change Default Quota?')
                    .contains('button','Yes')
                    .wait(300)

                cy.wait(700);

            })


        })

    context('Router Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(5) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Router Quota card
            cy.get('#router-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {
            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(5) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Router Quota card
            cy.get('#router-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (3) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(5) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Router Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(5) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Router Quota card
            cy.get('#router-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(5) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Router Quota card
            cy.get('#router-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Load Balancer Quota', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(6) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Load Balancer Quota card
            cy.get('#load-balancer-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(6) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Load Balancer Quota card
            cy.get('#load-balancer-quota').clear().type(1);
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (3) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(6) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Load Balancer Quota card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(6) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Load Balancer Quota card
            cy.get('#load-balancer-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(6) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Load Balancer Quotaa card
            cy.get('#load-balancer-quota').clear().type('4');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })


    })

    context('Security Groups', () => {

        it('Validation (Admin does not enter textfield.  The system display alert messsage “ Please input data” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(7) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Security Groups card
            cy.get('#security-group-quota').clear();
            cy.get('#security-rule-quota').clear();
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please input data');
            cy.wait(700);

        })

        it('Validation (Admin reduced the number of quota.  The system display alert message “กรุณากรอกจำนวนมากกว่า หรือเท่ากับ…. ขึ้นไป” )', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(7) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Security Groups card
            cy.get('#security-group-quota').clear().type('1');
            cy.get('#security-rule-quota').clear().type('1');
            cy.get('[type="submit"]').click();
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (10) used by this user.');
            cy.get('.text-danger').contains('Please specify a number greater than the current usage (100) used by this user.');

            cy.wait(700);

        })

        it('Usabilities (Admin click Cancel button. The system closed Edit.)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(7) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Security Groups card
            cy.wait(300);
            cy.contains('Cancel').click()

            cy.wait(700);

        })

        it('Usabilities ( Admin Edit Cloud Quota and click Save button. The system display modal “Confirm Change Default Quota?”)', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(7) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Security Groups card
            cy.get('#security-group-quota').clear().type('11');
            cy.get('#security-rule-quota').clear().type('150');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .wait(300)

            cy.wait(700);

        })

        it('Action success', () => {

            cy.get('#user-management-customer').click();
            cy.get('#search').type('pla01@gmail.com',{force: true});
            cy.get('.ant-table-row > :nth-child(3) > a').click({ force: true });
            cy.wait(2000);
            cy.get(':nth-child(4) > .px-0').click({ force: true });
            cy.get(':nth-child(7) > .card > .justify-content-between > .PRIMARY-TERTIARY-SM > .btn').click({ force: true }); //Edit Security Groups card
            cy.get('#security-group-quota').clear().type('11');
            cy.get('#security-rule-quota').clear().type('150');
            cy.get('[type="submit"]').click();
            cy.get('.modal-content')
                .should('be.visible')
                .and('contain', 'Confirm Change Default Quota?')
                .contains('button','Yes')
                .wait(300)

            cy.wait(700);

        })

    })
})