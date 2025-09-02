const ClearSaleProvider = require('../../../../src/support/provider/antifraudes/clearSaleProvider');
const ClearSaleCredentials = require('../../../../src/support/credentials/antifraudes/clearSaleCredentials');

describe('ClearSaleProvider', () => {
    it('should create a clear sale provider object with the constructor successfully', () => {
        const clearSaleProvider = new ClearSaleProvider({
            name: 'test',
            password: 'test123'
        });

        expect(clearSaleProvider.name).toBe('clearsale');
        expect(clearSaleProvider.credentials).toBeInstanceOf(ClearSaleCredentials);
        expect(clearSaleProvider.credentials.name).toBe('test');
        expect(clearSaleProvider.credentials.password).toBe('test123');
    });

    it('should create a clear sale provider object and set the values successfully', () => {
        const clearSaleProvider = new ClearSaleProvider();
        clearSaleProvider.credentials = new ClearSaleCredentials({
            name: 'test',
            password: 'test123'
        });

        expect(clearSaleProvider.name).toBe('clearsale');
        expect(clearSaleProvider.credentials).toBeInstanceOf(ClearSaleCredentials);
        expect(clearSaleProvider.credentials.name).toBe('test');
        expect(clearSaleProvider.credentials.password).toBe('test123');
    });

    it('should create an empty clear sale provider object successfully', () => {
        const clearSaleProvider = new ClearSaleProvider();

        expect(clearSaleProvider.name).toBe('clearsale');
        expect(clearSaleProvider.credentials).toBeInstanceOf(ClearSaleCredentials);
        expect(clearSaleProvider.credentials.name).toBeUndefined();
        expect(clearSaleProvider.credentials.password).toBeUndefined();
    });

    it('should create and set empty properties for a clear sale provider object successfully', () => {
        const clearSaleProvider = new ClearSaleProvider({
            name: 'test',
            password: 'test123'
        });

        clearSaleProvider.credentials = null;

        expect(clearSaleProvider.name).toBe('clearsale');
        expect(clearSaleProvider.credentials).toBeNull();
    });
});
