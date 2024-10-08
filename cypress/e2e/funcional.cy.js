/// <reference types='cypress' />

import loc from '../support/locators'

describe('Deve ter a nivel funcional', () => {
    beforeEach(() => {
        cy.login('anderson@teste.com.br', 'teste@teste')
    });


    it('Deve inserir uma conta', () => {
        cy.resetApp()
        cy.get(loc.MENU.HOME).click()
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta de teste')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.CONTAS.MSG_SUCESSO).should('contain', 'Conta inserida com sucesso!')
    });

    it('Deve alterar uma conta', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME).clear().type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    });

    it('Deve exibir um erro ao criar uma conta com o mesmo nome', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.CONTAS.MSG_ERROR).should('contain', 'status code 400')

    });

    it('Deve inserir uma movimentação', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta para movimentacoes')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MOVIMENTACAO.MSG_SUCESSO).should('contain', 'Movimentação inserida com sucesso!')
        cy.get(loc.MOVIMENTACAO.LISTA).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')

    });

    it('Deve pegar o saldo da conta', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534')
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_EDITAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MOVIMENTACAO.MSG_SUCESSO).should('contain', 'Movimentação alterada com sucesso!')
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CARTEIRA('Conta para saldo', '4.034,00')).should('exist')
    });

    it('Deve remover uma movimentação', () => {
        cy.get(loc.MENU.EXTRATO).click()
        cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
        cy.get(loc.EXTRATO.MSG_SUCESSO).should('contain', 'Movimentação removida com sucesso!')
    });

    it('Deve excluir uma contaDeve excluir uma conta', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.xpath(loc.CONTAS.XP_BTN_EXCLUIR('Conta alterada')).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta excluída com sucesso!')

    });

})