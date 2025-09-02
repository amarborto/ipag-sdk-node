const KondutoCredentials = require('../../../../src/support/credentials/antifraudes/kondutoCredentials');

describe('KondutoCredentials', () => {
    it('should create a konduto credentials object with the constructor successfully', () => {
        const kondutoCredentials = new KondutoCredentials({
            apiKey: '123456',
            publicKey: 'abc123',
        });

        expect(kondutoCredentials.apiKey).toBe('123456');
        expect(kondutoCredentials.publicKey).toBe('abc123');
    });

    it('should create a konduto credentials object and set the values successfully', () => {
        const kondutoCredentials = new KondutoCredentials();
        kondutoCredentials.apiKey = '123456';
        kondutoCredentials.publicKey = 'abc123';

        expect(kondutoCredentials.apiKey).toBe('123456');
        expect(kondutoCredentials.publicKey).toBe('abc123');
    });

    it('should create an empty konduto credentials object successfully', () => {
        const kondutoCredentials = new KondutoCredentials();

        expect(kondutoCredentials.apiKey).toBeUndefined();
        expect(kondutoCredentials.publicKey).toBeUndefined();
    });

    it('should create and set empty properties for a konduto credentials object successfully', () => {
        const kondutoCredentials = new KondutoCredentials({
            apiKey: '123456',
            publicKey: 'abc123',
        });

        kondutoCredentials.apiKey = null;
        kondutoCredentials.publicKey = null;

        expect(kondutoCredentials.apiKey).toBeNull();
        expect(kondutoCredentials.publicKey).toBeNull();
    });
});
