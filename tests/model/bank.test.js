const Bank = require('../../src/model/bank');

describe('Bank', () => {
    it('should create a bank object with the constructor successfully', () => {
        const bank = new Bank({
            code: '001',
            agency: '1234',
            account: '123456',
            type: 'checkings',
            external_id: 'teste@teste.com'
        });

        expect(bank.code).toBe('001');
        expect(bank.agency).toBe('1234');
        expect(bank.account).toBe('123456');
        expect(bank.type).toBe('checkings');
        expect(bank.external_id).toBe('teste@teste.com');
    });

    it('should create a bank object and set the values successfully', () => {
        const bank = new Bank();
        bank.code = '001';
        bank.agency = '1234';
        bank.account = '123456';
        bank.type = 'checkings';
        bank.external_id = 'teste@teste.com';

        expect(bank.code).toBe('001');
        expect(bank.agency).toBe('1234');
        expect(bank.account).toBe('123456');
        expect(bank.type).toBe('checkings');
        expect(bank.external_id).toBe('teste@teste.com');
    });

    it('should create an empty bank object successfully', () => {
        const bank = new Bank();

        expect(bank.code).toBeUndefined();
        expect(bank.agency).toBeUndefined();
        expect(bank.account).toBeUndefined();
        expect(bank.type).toBeUndefined();
        expect(bank.external_id).toBeUndefined();
    });

    it('should create and set empty properties for a bank object successfully', () => {
        const bank = new Bank({
            code: '001',
            agency: '1234',
            account: '123456',
            type: 'checkings',
            external_id: 'teste@teste.com'
        });

        bank.code = null;
        bank.agency = null;
        bank.account = null;
        bank.type = null;
        bank.external_id = null;

        expect(bank.code).toBeNull();
        expect(bank.agency).toBeNull();
        expect(bank.account).toBeNull();
        expect(bank.type).toBeNull();
        expect(bank.external_id).toBeNull();
    });
});
