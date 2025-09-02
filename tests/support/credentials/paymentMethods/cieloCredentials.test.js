const CieloCredentials = require('../../../src/support/credentials/paymentMethods/cieloCredentials');

describe('CieloCredentials', () => {
    it('should create a cielo credentials object with the constructor successfully', () => {
        const cieloCredentials = new CieloCredentials({
            merchant_id: 'test',
            merchant_key: 'test123',
        });

        expect(cieloCredentials.merchant_id).toBe('test');
        expect(cieloCredentials.merchant_key).toBe('test123');
    });

    it('should create a cielo credentials object and set the values successfully', () => {
        const cieloCredentials = new CieloCredentials();
        cieloCredentials.merchant_id = 'test';
        cieloCredentials.merchant_key = 'test123';

        expect(cieloCredentials.merchant_id).toBe('test');
        expect(cieloCredentials.merchant_key).toBe('test123');
    });

    it('should create an empty cielo credentials object successfully', () => {
        const cieloCredentials = new CieloCredentials();

        expect(cieloCredentials.merchant_id).toBeUndefined();
        expect(cieloCredentials.merchant_key).toBeUndefined();
    });

    it('should create and set empty properties for a cielo credentials object successfully', () => {
        const cieloCredentials = new CieloCredentials({
            merchant_id: 'test',
            merchant_key: 'test123',
        });

        cieloCredentials.merchant_id = null;
        cieloCredentials.merchant_key = null;

        expect(cieloCredentials.merchant_id).toBeNull();
        expect(cieloCredentials.merchant_key).toBeNull();
    });
});
