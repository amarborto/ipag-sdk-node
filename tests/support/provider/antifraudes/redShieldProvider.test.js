const RedShieldProvider = require('../../../../src/support/provider/antifraudes/redShieldProvider');
const RedShieldCredentials = require('../../../../src/support/credentials/antifraudes/redShieldCredentials');

describe('RedShieldProvider', () => {
    it('should create a red shield provider object with the constructor successfully', () => {
        const redShieldProvider = new RedShieldProvider({
            token: '123',
            entityId: 'abc',
            channelId: '123abc',
            serviceId: 'abc123',
        });

        expect(redShieldProvider.name).toBe('redshield');
        expect(redShieldProvider.credentials).toBeInstanceOf(RedShieldCredentials);
        expect(redShieldProvider.credentials.token).toBe('123');
        expect(redShieldProvider.credentials.entityId).toBe('abc');
        expect(redShieldProvider.credentials.channelId).toBe('123abc');
        expect(redShieldProvider.credentials.serviceId).toBe('abc123');
    });

    it('should create a red shield provider object and set the values successfully', () => {
        const redShieldProvider = new RedShieldProvider();
        redShieldProvider.credentials = new RedShieldCredentials({
            token: '123',
            entityId: 'abc',
            channelId: '123abc',
            serviceId: 'abc123',
        });

        expect(redShieldProvider.name).toBe('redshield');
        expect(redShieldProvider.credentials).toBeInstanceOf(RedShieldCredentials);
        expect(redShieldProvider.credentials.token).toBe('123');
        expect(redShieldProvider.credentials.entityId).toBe('abc');
        expect(redShieldProvider.credentials.channelId).toBe('123abc');
        expect(redShieldProvider.credentials.serviceId).toBe('abc123');
    });

    it('should create an empty red shield provider object successfully', () => {
        const redShieldProvider = new RedShieldProvider();

        expect(redShieldProvider.name).toBe('redshield');
        expect(redShieldProvider.credentials).toBeInstanceOf(RedShieldCredentials);
        expect(redShieldProvider.credentials.token).toBeUndefined();
        expect(redShieldProvider.credentials.entityId).toBeUndefined();
        expect(redShieldProvider.credentials.channelId).toBeUndefined();
        expect(redShieldProvider.credentials.serviceId).toBeUndefined();
    });

    it('should create and set empty properties for a red shield provider object successfully', () => {
        const redShieldProvider = new RedShieldProvider({
            token: '123',
            entityId: 'abc',
            channelId: '123abc',
            serviceId: 'abc123',
        });

        redShieldProvider.credentials = null;

        expect(redShieldProvider.name).toBe('redshield');
        expect(redShieldProvider.credentials).toBeNull();
    });
});
