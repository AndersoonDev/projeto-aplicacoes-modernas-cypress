// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from '../support/locators'

Cypress.Commands.add('clickAlert', (locator, message) => {
    cy.get(locator).click()
    cy.on('window:alert', msg => {
        expect(msg).to.be.equal(message)
    })
});

Cypress.Commands.add('login', (email, senha) => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type(email)
    cy.get(loc.LOGIN.PASSWORD).type(senha)
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo, Anderson Silva!')
});

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.HOME).click()
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
});

Cypress.Commands.add('resetApp', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.RESET).click()
});

Cypress.Commands.add('getToken', (user, password) => {
    cy.request({
        method: 'POST',
        url: '/signin',
        body: {
            email: user,
            redirecionar: false,
            senha: password
        }
    }).its('body.token').should('not.be.empty')
        .then(token => {
            Cypress.env('token', token) //Token
            return token
        })
});

Cypress.Commands.add('resetRest', () => {
    cy.getToken('anderson@teste.com.br', 'teste@teste')
        .then(token => {
            cy.request({
                method: 'GET',
                url: '/reset',
                headers: { Authorization: `JWT ${token}` }
            })
        }).its('status').should('be.equal', 200)
});

Cypress.Commands.add('getContaByName', (name) => {
    cy.getToken('anderson@teste.com.br', 'teste@teste')
        .then(token => {
            cy.request({
                method: 'GET',
                url: '/contas',
                headers: { Authorization: `JWT ${token}` },
                qs: {
                    nome: name
                }
            }).then(response => {
                return response.body[0].id
            })
        })

});

Cypress.Commands.overwrite('request', (originalFn, ...options) => {
    if (options.length === 1) {
        if (Cypress.env('token')) {
            options[0].headers = {
                Authorization: `JWT ${Cypress.env('token')}`
            }
            // options[0].Authorization = `JWT ${Cypress.env('token')}` outra opção que funciona
        }
    }
    return originalFn(...options)
})


