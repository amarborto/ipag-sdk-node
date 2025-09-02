const BinCredentials = require('../../../src/support/credentials/paymentMethods/binCredentials');

describe('BinCredentials', () => {
    it('should create a bin credentials object with the constructor successfully', () => {
        const binCredentials = new BinCredentials({
            store_id_subscription: '123',
            store_id: 'abc123',
        });

        expect(binCredentials.store_id_subscription).toBe('123');
        expect(binCredentials.store_id).toBe('abc123');
    });

    it('should create a bin credentials object and set the values successfully', () => {
        const binCredentials = new BinCredentials();
        binCredentials.store_id_subscription = '123';
        binCredentials.store_id = 'abc123';

        expect(binCredentials.store_id_subscription).toBe('123');
        expect(binCredentials.store_id).toBe('abc123');
    });

    it('should create an empty bin credentials object successfully', () => {
        const binCredentials = new BinCredentials();

        expect(binCredentials.store_id_subscription).toBeUndefined();
        expect(binCredentials.store_id).toBeUndefined();
    });

    it('should create and set empty properties for a bin credentials object successfully', () => {
        const binCredentials = new BinCredentials({
            store_id_subscription: '123',
            store_id: 'abc123',
        });

        binCredentials.store_id_subscription = null;
        binCredentials.store_id = null;

        expect(binCredentials.store_id_subscription).toBeNull();
        expect(binCredentials.store_id).toBeNull();
    });
});
