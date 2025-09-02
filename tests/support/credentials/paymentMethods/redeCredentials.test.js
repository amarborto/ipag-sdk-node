const RedeCredentials = require('../../../src/support/credentials/paymentMethods/redeCredentials');

describe('RedeCredentials', () => {
    it('should create a rede credentials object with the constructor successfully', () => {
        const redeCredentials = new RedeCredentials({
            erede_key: 'test',
            pv: 'test123',
        });

        expect(redeCredentials.erede_key).toBe('test');
        expect(redeCredentials.pv).toBe('test123');
    });

    it('should create a rede credentials object and set the values successfully', () => {
        const redeCredentials = new RedeCredentials();
        redeCredentials.erede_key = 'test';
        redeCredentials.pv = 'test123';

        expect(redeCredentials.erede_key).toBe('test');
        expect(redeCredentials.pv).toBe('test123');
    });

    it('should create an empty rede credentials object successfully', () => {
        const redeCredentials = new RedeCredentials();

        expect(redeCredentials.erede_key).toBeUndefined();
        expect(redeCredentials.pv).toBeUndefined();
    });

    it('should create and set empty properties for a rede credentials object successfully', () => {
        const redeCredentials = new RedeCredentials({
            erede_key: 'test',
            pv: 'test123',
        });

        redeCredentials.erede_key = null;
        redeCredentials.pv = null;

        expect(redeCredentials.erede_key).toBeNull();
        expect(redeCredentials.pv).toBeNull();
    });
});
