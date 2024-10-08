const locators = {
    LOGIN: {
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn',
    },

    MENU: {
        HOME: '[data-test="menu-home"]',
        SETTINGS: '[data-test="menu-settings"] > .fas',
        CONTAS: '[href="/contas"]',
        RESET: '[href="/reset"]',
        MOVIMENTACAO: '[href="/movimentacao"]',
        EXTRATO: '[data-test="menu-extrato"]'
    },

    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        MSG_ERROR: '.toast-error > .toast-message',
        MSG_SUCESSO: '.toast-success > .toast-message',

        XP_BTN_ALTERAR: nome => `//table//td[contains(., "${nome}")]/..//i[@class="far fa-edit"]`,
        XP_BTN_EXCLUIR: nome => `//table//td[contains(., "${nome}")]/..//i[@class="far fa-trash-alt"]`
    },

    MOVIMENTACAO: {
        DESCRICAO: '[data-test="descricao"]',
        VALOR: '[data-test="valor"]',
        INTERESSADO: '[data-test="envolvido"]',
        CONTA: '[data-test="conta"]',
        STATUS: '[data-test="status"]',
        BTN_SALVAR: '.btn-primary',
        MSG_SUCESSO: '.toast-success',
        LISTA: '.list-group > li',
    },

    EXTRATO: {
        LINHAS: '.list-group > li',
        MSG_SUCESSO: '.toast-success',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., "${desc}")]/..//small[contains(.,"${value}")]`,
        FN_XP_EDITAR_ELEMENTO: conta => `//span[contains(.,"${conta}")]/../../..//i[@class="fas fa-edit"]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(.,"${conta}")]/../../../..//i[@class="far fa-trash-alt"]`,
        FN_XP_LINHA: desc => `//span[contains(.,${desc})]/../../../..`,
    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(., "${nome}")]/..//td[2]`,
        FN_XP_SALDO_CARTEIRA: (conta, saldo) => `//tr//td[contains(.,"${conta}")]/..//td[contains(.,"${saldo}")]`
    },

    MESSAGE: '.toast-message',
}

export default locators