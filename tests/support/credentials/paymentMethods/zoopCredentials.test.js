const ZoopCredentials = require('../../../../src/support/credentials/paymentMethods/zoopCredentials');

describe('ZoopCredentials', () => {
    it('should create a zoop credentials object with the constructor successfully', () => {
        const zoopCredentials = new ZoopCredentials({
            marketplace_id: '123',
            publishable_key: '123abc',
            seller_id: '321',
        });

        expect(zoopCredentials.marketplace_id).toBe('123');
        expect(zoopCredentials.publishable_key).toBe('123abc');
        expect(zoopCredentials.seller_id).toBe('321');
    });

    it('should create a zoop credentials object and set the values successfully', () => {
        const zoopCredentials = new ZoopCredentials();
        zoopCredentials.marketplace_id = '123';
        zoopCredentials.publishable_key = '123abc';
        zoopCredentials.seller_id = '321';

        expect(zoopCredentials.marketplace_id).toBe('123');
        expect(zoopCredentials.publishable_key).toBe('123abc');
        expect(zoopCredentials.seller_id).toBe('321');
    });

    it('should create an empty zoop credentials object successfully', () => {
        const zoopCredentials = new ZoopCredentials();

        expect(zoopCredentials.marketplace_id).toBeUndefined();
        expect(zoopCredentials.publishable_key).toBeUndefined();
        expect(zoopCredentials.seller_id).toBeUndefined();
    });

    it('should create and set empty properties for a zoop credentials object successfully', () => {
        const zoopCredentials = new ZoopCredentials({
            marketplace_id: '123',
            publishable_key: '123abc',
            seller_id: '321',
        });

        zoopCredentials.marketplace_id = null;
        zoopCredentials.publishable_key = null;
        zoopCredentials.seller_id = null;

        expect(zoopCredentials.marketplace_id).toBeNull();
        expect(zoopCredentials.publishable_key).toBeNull();
        expect(zoopCredentials.seller_id).toBeNull();
    });
});
