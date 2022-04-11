const Conta = require('../index');

describe ('Testando o objeto Conta', () => {
    let conta;

    beforeEach(() => {
        conta = new Conta('2549', '12345678', '1000');
    })

    it('Deve começar com os parametros certos', () => {
        expect(conta.agencia).toEqual('2549');
        expect(conta.conta).toEqual('12345678');
        expect(conta.saldo).toEqual('1000');
    });

    it('Saldo deve começar com R$ 1000,00', () => {
        expect(conta.saldo).toEqual('1000');
    })
})