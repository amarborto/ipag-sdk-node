const GlobalPaymentsCredentials = require('../../../src/support/credentials/paymentMethods/globalPaymentsCredentials');

describe('GlobalPaymentsCredentials', () => {
    it('should create a global payments credentials object with the constructor successfully', () => {
        const globalPaymentsCredentials = new GlobalPaymentsCredentials({
            terminal: 'test',
            merchant_id: '123',
            merchant_key: 'test123',
        });

        expect(globalPaymentsCredentials.terminal).toBe('test');
        expect(globalPaymentsCredentials.merchant_id).toBe('123');
        expect(globalPaymentsCredentials.merchant_key).toBe('test123');
    });

    it('should create a global payments credentials object and set the values successfully', () => {
        const globalPaymentsCredentials = new GlobalPaymentsCredentials();
        globalPaymentsCredentials.terminal = 'test';
        globalPaymentsCredentials.merchant_id = '123';
        globalPaymentsCredentials.merchant_key = 'test123';

        expect(globalPaymentsCredentials.terminal).toBe('test');
        expect(globalPaymentsCredentials.merchant_id).toBe('123');
        expect(globalPaymentsCredentials.merchant_key).toBe('test123');
    });

    it('should create an empty global payments credentials object successfully', () => {
        const globalPaymentsCredentials = new GlobalPaymentsCredentials();

        expect(globalPaymentsCredentials.terminal).toBeUndefined();
        expect(globalPaymentsCredentials.merchant_id).toBeUndefined();
        expect(globalPaymentsCredentials.merchant_key).toBeUndefined();
    });

    it('should create and set empty properties for a global payments credentials object successfully', () => {
        const globalPaymentsCredentials = new GlobalPaymentsCredentials({
            terminal: 'test',
            merchant_id: '123',
            merchant_key: 'test123',
        });

        globalPaymentsCredentials.terminal = null;
        globalPaymentsCredentials.merchant_id = null;
        globalPaymentsCredentials.merchant_key = null;

        expect(globalPaymentsCredentials.terminal).toBeNull();
        expect(globalPaymentsCredentials.merchant_id).toBeNull();
        expect(globalPaymentsCredentials.merchant_key).toBeNull();
    });
});
