describe('template spec', () => {
    it('Login Sucsess', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()    
    })
    it('Login Failed - empty username', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Login Failed - locked user', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    
  })