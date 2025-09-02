const RedShieldCredentials = require('../../../../src/support/credentials/antifraudes/redShieldCredentials');

describe('RedShieldCredentials', () => {
    it('should create a red shield credentials object with the constructor successfully', () => {
        const redShieldCredentials = new RedShieldCredentials({
            token: 'abcdef',
            entityId: '123',
            channelId: '321',
            serviceId: '213',
        });

        expect(redShieldCredentials.token).toBe('abcdef');
        expect(redShieldCredentials.entityId).toBe('123');
        expect(redShieldCredentials.channelId).toBe('321');
        expect(redShieldCredentials.serviceId).toBe('213');
    });

    it('should create a red shield credentials object and set the values successfully', () => {
        const redShieldCredentials = new RedShieldCredentials();
        redShieldCredentials.token = 'abcdef';
        redShieldCredentials.entityId = '123';
        redShieldCredentials.channelId = '321';
        redShieldCredentials.serviceId = '213';

        expect(redShieldCredentials.token).toBe('abcdef');
        expect(redShieldCredentials.entityId).toBe('123');
        expect(redShieldCredentials.channelId).toBe('321');
        expect(redShieldCredentials.serviceId).toBe('213');
    });

    it('should create an empty red shield credentials object successfully', () => {
        const redShieldCredentials = new RedShieldCredentials();

        expect(redShieldCredentials.token).toBeUndefined();
        expect(redShieldCredentials.entityId).toBeUndefined();
        expect(redShieldCredentials.channelId).toBeUndefined();
        expect(redShieldCredentials.serviceId).toBeUndefined();
    });

    it('should create and set empty properties for a red shield credentials object successfully', () => {
        const redShieldCredentials = new RedShieldCredentials({
            token: 'abcdef',
            entityId: '123',
            channelId: '321',
            serviceId: '213',
        });

        redShieldCredentials.token = null;
        redShieldCredentials.entityId = null;
        redShieldCredentials.channelId = null;
        redShieldCredentials.serviceId = null;

        expect(redShieldCredentials.token).toBeNull();
        expect(redShieldCredentials.entityId).toBeNull();
        expect(redShieldCredentials.channelId).toBeNull();
        expect(redShieldCredentials.serviceId).toBeNull();
    });
});
