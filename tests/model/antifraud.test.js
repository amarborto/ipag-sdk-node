const Antifraud = require('../../src/model/antifraud');
const AntifraudProvider = require('../../src/model/antifraudProvider');
const AntifraudSettings = require('../../src/model/antifraudSettings');

describe('Antifraud', () => {
    it('should create an antifraud object with the constructor successfully', () => {
        const antifraud = new Antifraud({
            provider: {
                name: 'redshield',
                credentials: {
                    token: 'xxxxxxxx',
                }
            },
            settings: {
                enabled: true,
            }
        });

        expect(antifraud.provider).toBeInstanceOf(AntifraudProvider);
        expect(antifraud.provider.name).toBe('redshield');
        expect(antifraud.provider.credentials.token).toBe('xxxxxxxx');
        expect(antifraud.settings).toBeInstanceOf(AntifraudSettings);
        expect(antifraud.settings.enabled).toBe(true);
    });

    it('should create an antifraud object and set the values successfully', () => {
        const antifraud = new Antifraud();
        antifraud.provider = new AntifraudProvider({
            name: 'redshield',
            credentials: {
                token: 'xxxxxxxx',
            }
        });
        antifraud.settings = new AntifraudSettings({
            enabled: true,
        });

        expect(antifraud.provider).toBeInstanceOf(AntifraudProvider);
        expect(antifraud.provider.name).toBe('redshield');
        expect(antifraud.provider.credentials.token).toBe('xxxxxxxx');
        expect(antifraud.settings).toBeInstanceOf(AntifraudSettings);
        expect(antifraud.settings.enabled).toBe(true);
    });

    it('should create an empty antifraud object successfully', () => {
        const antifraud = new Antifraud();

        expect(antifraud.provider).toBeUndefined();
        expect(antifraud.settings).toBeUndefined();
    });

    it('should create and set empty properties for an antifraud object successfully', () => {
        const antifraud = new Antifraud({
            provider: {
                name: 'redshield',
                credentials: {
                    token: 'xxxxxxxx',
                }
            },
            settings: {
                enabled: true,
            }
        });

        antifraud.provider = null;
        antifraud.settings = null;

        expect(antifraud.provider).toBeNull();
        expect(antifraud.settings).toBeNull();
    });
});
