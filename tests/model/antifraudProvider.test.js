const AntifraudProvider = require('../../src/model/antifraudProvider');

describe('AntifraudProvider', () => {
    it('should create an antifraud provider object with the constructor successfully', () => {
        const antifraudProvider = new AntifraudProvider({
            name: 'redshield',
            credentials: {
                token: 'xxxxxxxx',
                entityId: 'xxxxxxxx',
                channelId: 'xxxxxxxx',
                serviceId: 'xxxxxxxx'
            }
        });

        expect(antifraudProvider.name).toBe('redshield');
        expect(antifraudProvider.credentials.token).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.entityId).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.channelId).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.serviceId).toBe('xxxxxxxx');
    });

    it('should create an antifraud provider object and set the values successfully', () => {
        const antifraudProvider = new AntifraudProvider();
        antifraudProvider.name = 'redshield';
        antifraudProvider.credentials = {
            token: 'xxxxxxxx',
            entityId: 'xxxxxxxx',
            channelId: 'xxxxxxxx',
            serviceId: 'xxxxxxxx'
        };

        expect(antifraudProvider.name).toBe('redshield');
        expect(antifraudProvider.credentials.token).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.entityId).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.channelId).toBe('xxxxxxxx');
        expect(antifraudProvider.credentials.serviceId).toBe('xxxxxxxx');
    });

    it('should create an empty antifraud provider object successfully', () => {
        const antifraudProvider = new AntifraudProvider();

        expect(antifraudProvider.name).toBeUndefined();
        expect(antifraudProvider.credentials).toBeUndefined();
    });

    it('should create and set empty properties for an antifraud provider object successfully', () => {
        const antifraudProvider = new AntifraudProvider({
            name: 'redshield',
            credentials: {
                token: 'xxxxxxxx',
                entityId: 'xxxxxxxx',
                channelId: 'xxxxxxxx',
                serviceId: 'xxxxxxxx'
            }
        });

        antifraudProvider.name = null;
        antifraudProvider.credentials = null;

        expect(antifraudProvider.name).toBeNull();
        expect(antifraudProvider.credentials).toBeNull();
    });
});
