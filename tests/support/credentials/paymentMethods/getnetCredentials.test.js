const GetnetCredentials = require('../../../src/support/credentials/paymentMethods/getnetCredentials');

describe('GetnetCredentials', () => {
    it('should create a getnet credentials object with the constructor successfully', () => {
        const getnetCredentials = new GetnetCredentials({
            establishment_number: '123',
            key: 'test123',
            user: 'test',
            password: 'test321',
        });

        expect(getnetCredentials.establishment_number).toBe('123');
        expect(getnetCredentials.key).toBe('test123');
        expect(getnetCredentials.user).toBe('test');
        expect(getnetCredentials.password).toBe('test321');
    });

    it('should create a getnet credentials object and set the values successfully', () => {
        const getnetCredentials = new GetnetCredentials();
        getnetCredentials.establishment_number = '123';
        getnetCredentials.key = 'test123';
        getnetCredentials.user = 'test';
        getnetCredentials.password = 'test321';

        expect(getnetCredentials.establishment_number).toBe('123');
        expect(getnetCredentials.key).toBe('test123');
        expect(getnetCredentials.user).toBe('test');
        expect(getnetCredentials.password).toBe('test321');
    });

    it('should create an empty getnet credentials object successfully', () => {
        const getnetCredentials = new GetnetCredentials();

        expect(getnetCredentials.establishment_number).toBeUndefined();
        expect(getnetCredentials.key).toBeUndefined();
        expect(getnetCredentials.user).toBeUndefined();
        expect(getnetCredentials.password).toBeUndefined();
    });

    it('should create and set empty properties for a getnet credentials object successfully', () => {
        const getnetCredentials = new GetnetCredentials({
            establishment_number: '123',
            key: 'test123',
            user: 'test',
            password: 'test321',
        });

        getnetCredentials.establishment_number = null;
        getnetCredentials.key = null;
        getnetCredentials.user = null;
        getnetCredentials.password = null;

        expect(getnetCredentials.establishment_number).toBeNull();
        expect(getnetCredentials.key).toBeNull();
        expect(getnetCredentials.user).toBeNull();
        expect(getnetCredentials.password).toBeNull();
    });
});
