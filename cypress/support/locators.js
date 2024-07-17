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
    },

    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., "${desc}")]/..//small[contains(.,"${value}")]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(.,"${conta}")]/../../../..//i[@class="far fa-trash-alt"]`,

    },

    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(., "${nome}")]/..//td[2]`,
    },

        MESSAGE: '.toast-message',
}

export default locators