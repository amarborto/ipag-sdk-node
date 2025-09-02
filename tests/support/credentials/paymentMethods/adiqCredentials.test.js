const AdiqCredentials = require('../../../../src/support/credentials/paymentMethods/adiqCredentials');

describe('AdiqCredentials', () => {
    it('should create an adiq credentials object with the constructor successfully', () => {
        const adiqCredentials = new AdiqCredentials({
            client_id: 'test',
            client_secret: 'test123',
        });

        expect(adiqCredentials.client_id).toBe('test');
        expect(adiqCredentials.client_secret).toBe('test123');
    });

    it('should create an adiq credentials object and set the values successfully', () => {
        const adiqCredentials = new AdiqCredentials();
        adiqCredentials.client_id = 'test';
        adiqCredentials.client_secret = 'test123';

        expect(adiqCredentials.client_id).toBe('test');
        expect(adiqCredentials.client_secret).toBe('test123');
    });

    it('should create an empty adiq credentials object successfully', () => {
        const adiqCredentials = new AdiqCredentials();

        expect(adiqCredentials.client_id).toBeUndefined();
        expect(adiqCredentials.client_secret).toBeUndefined();
    });

    it('should create and set empty properties for an adiq credentials object successfully', () => {
        const adiqCredentials = new AdiqCredentials({
            client_id: 'test',
            client_secret: 'test123',
        });

        adiqCredentials.client_id = null;
        adiqCredentials.client_secret = null;

        expect(adiqCredentials.client_id).toBeNull();
        expect(adiqCredentials.client_secret).toBeNull();
    });
});
