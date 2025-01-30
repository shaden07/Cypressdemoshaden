describe('template spec', () => {
    it.only('Login Sucsess', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.LoginSausdemo('standart_user','secret_sauce' )
        cy.get('[data-test="Eror"]').should('have.text', 'tulisane')         
    })
    it('Login Failed - empty username', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="Eror"]').should('have.text', 'tulisane')
    })
    it('Login Failed - locked user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test="Eror"]').should('have.text', 'tulisane')
    })
    
  })