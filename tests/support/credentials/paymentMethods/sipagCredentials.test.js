const SipagCredentials = require('../../../../src/support/credentials/paymentMethods/sipagCredentials');

describe('SipagCredentials', () => {
    it('should create a sipag credentials object with the constructor successfully', () => {
        const sipagCredentials = new SipagCredentials({
            store_id_subscription: 'test',
            store_id: 'test123',
        });

        expect(sipagCredentials.store_id_subscription).toBe('test');
        expect(sipagCredentials.store_id).toBe('test123');
    });

    it('should create a sipag credentials object and set the values successfully', () => {
        const sipagCredentials = new SipagCredentials();
        sipagCredentials.store_id_subscription = 'test';
        sipagCredentials.store_id = 'test123';

        expect(sipagCredentials.store_id_subscription).toBe('test');
        expect(sipagCredentials.store_id).toBe('test123');
    });

    it('should create an empty sipag credentials object successfully', () => {
        const sipagCredentials = new SipagCredentials();

        expect(sipagCredentials.store_id_subscription).toBeUndefined();
        expect(sipagCredentials.store_id).toBeUndefined();
    });

    it('should create and set empty properties for a sipag credentials object successfully', () => {
        const sipagCredentials = new SipagCredentials({
            store_id_subscription: 'test',
            store_id: 'test123',
        });

        sipagCredentials.store_id_subscription = null;
        sipagCredentials.store_id = null;

        expect(sipagCredentials.store_id_subscription).toBeNull();
        expect(sipagCredentials.store_id).toBeNull();
    });
});
