const ClearSaleCredentials = require('../../../../src/support/credentials/antifraudes/clearSaleCredentials');

describe('ClearSaleCredentials', () => {
    it('should create a clear sale credentials object with the constructor successfully', () => {
        const clearSaleCredentials = new ClearSaleCredentials({
            name: 'test',
            password: 'test123'
        });

        expect(clearSaleCredentials.name).toBe('test');
        expect(clearSaleCredentials.password).toBe('test123');
    });

    it('should create a clear sale credentials object and set the values successfully', () => {
        const clearSaleCredentials = new ClearSaleCredentials();
        clearSaleCredentials.name = 'test';
        clearSaleCredentials.password = 'test123';

        expect(clearSaleCredentials.name).toBe('test');
        expect(clearSaleCredentials.password).toBe('test123');
    });

    it('should create an empty clear sale credentials object successfully', () => {
        const clearSaleCredentials = new ClearSaleCredentials();

        expect(clearSaleCredentials.name).toBeUndefined();
        expect(clearSaleCredentials.password).toBeUndefined();
    });

    it('should create and set empty properties for a clear sale credentials object successfully', () => {
        const clearSaleCredentials = new ClearSaleCredentials({
            name: 'test',
            password: 'test123'
        });

        clearSaleCredentials.name = null;
        clearSaleCredentials.password = null;

        expect(clearSaleCredentials.name).toBeNull();
        expect(clearSaleCredentials.password).toBeNull();
    });
});
