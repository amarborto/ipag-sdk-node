const KondutoProvider = require('../../../../src/support/provider/antifraudes/kondutoProvider');
const KondutoCredentials = require('../../../../src/support/credentials/antifraudes/kondutoCredentials');

describe('KondutoProvider', () => {
    it('should create a konduto provider object with the constructor successfully', () => {
        const kondutoProvider = new KondutoProvider({
            apiKey: '123',
            publicKey: 'abc123',
        });

        expect(kondutoProvider.name).toBe('konduto');
        expect(kondutoProvider.credentials).toBeInstanceOf(KondutoCredentials);
        expect(kondutoProvider.credentials.apiKey).toBe('123');
        expect(kondutoProvider.credentials.publicKey).toBe('abc123');
    });

    it('should create a konduto provider object and set the values successfully', () => {
        const kondutoProvider = new KondutoProvider();
        kondutoProvider.credentials = new KondutoCredentials({
            apiKey: '123',
            publicKey: 'abc123',
        });

        expect(kondutoProvider.name).toBe('konduto');
        expect(kondutoProvider.credentials).toBeInstanceOf(KondutoCredentials);
        expect(kondutoProvider.credentials.apiKey).toBe('123');
        expect(kondutoProvider.credentials.publicKey).toBe('abc123');
    });

    it('should create an empty konduto provider object successfully', () => {
        const kondutoProvider = new KondutoProvider();

        expect(kondutoProvider.name).toBe('konduto');
        expect(kondutoProvider.credentials).toBeInstanceOf(KondutoCredentials);
        expect(kondutoProvider.credentials.apiKey).toBeUndefined();
        expect(kondutoProvider.credentials.publicKey).toBeUndefined();
    });

    it('should create and set empty properties for a konduto provider object successfully', () => {
        const kondutoProvider = new KondutoProvider({
            apiKey: '123',
            publicKey: 'abc123',
        });

        kondutoProvider.credentials = null;

        expect(kondutoProvider.name).toBe('konduto');
        expect(kondutoProvider.credentials).toBeNull();
    });
});
