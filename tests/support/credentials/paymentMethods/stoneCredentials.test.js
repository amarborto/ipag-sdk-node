const StoneCredentials = require('../../../../src/support/credentials/paymentMethods/stoneCredentials');

describe('StoneCredentials', () => {
    it('should create a stone credentials object with the constructor successfully', () => {
        const stoneCredentials = new StoneCredentials({
            stone_code: 'test',
            stone_sak: 'test123',
        });

        expect(stoneCredentials.stone_code).toBe('test');
        expect(stoneCredentials.stone_sak).toBe('test123');
    });

    it('should create a stone credentials object and set the values successfully', () => {
        const stoneCredentials = new StoneCredentials();
        stoneCredentials.stone_code = 'test';
        stoneCredentials.stone_sak = 'test123';

        expect(stoneCredentials.stone_code).toBe('test');
        expect(stoneCredentials.stone_sak).toBe('test123');
    });

    it('should create an empty stone credentials object successfully', () => {
        const stoneCredentials = new StoneCredentials();

        expect(stoneCredentials.stone_code).toBeUndefined();
        expect(stoneCredentials.stone_sak).toBeUndefined();
    });

    it('should create and set empty properties for a stone credentials object successfully', () => {
        const stoneCredentials = new StoneCredentials({
            stone_code: 'test',
            stone_sak: 'test123',
        });

        stoneCredentials.stone_code = null;
        stoneCredentials.stone_sak = null;

        expect(stoneCredentials.stone_code).toBeNull();
        expect(stoneCredentials.stone_sak).toBeNull();
    });
});
