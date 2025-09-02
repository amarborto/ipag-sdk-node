const PaymentMethod = require('../../src/model/paymentMethod');

describe('PaymentMethod', () => {
    it('should create a payment method object with the constructor successfully', () => {
        const paymentMethod = new PaymentMethod({
            acquirer: 'stone',
            priority: 100,
            environment: 'test',
            capture: true,
            retry: true,
            credentials: {
                stone_code: 'xxxxx',
                stone_sak: 'xxxxxx'
            },
        });

        expect(paymentMethod.acquirer).toBe('stone');
        expect(paymentMethod.priority).toBe(100);
        expect(paymentMethod.environment).toBe('test');
        expect(paymentMethod.capture).toBe(true);
        expect(paymentMethod.retry).toBe(true);
        expect(paymentMethod.credentials).toEqual({
            stone_code: 'xxxxx',
            stone_sak: 'xxxxxx'
        });
    });

    it('should create a payment method object and set the values successfully', () => {
        const paymentMethod = new PaymentMethod();
        paymentMethod.acquirer = 'stone';
        paymentMethod.priority = 100;
        paymentMethod.environment = 'test';
        paymentMethod.capture = true;
        paymentMethod.retry = true;
        paymentMethod.credentials = {
            stone_code: 'xxxxx',
            stone_sak: 'xxxxxx'
        };

        expect(paymentMethod.acquirer).toBe('stone');
        expect(paymentMethod.priority).toBe(100);
        expect(paymentMethod.environment).toBe('test');
        expect(paymentMethod.capture).toBe(true);
        expect(paymentMethod.retry).toBe(true);
        expect(paymentMethod.credentials).toEqual({
            stone_code: 'xxxxx',
            stone_sak: 'xxxxxx'
        });
    });

    it('should create an empty payment method object successfully', () => {
        const paymentMethod = new PaymentMethod();

        expect(paymentMethod.acquirer).toBeUndefined();
        expect(paymentMethod.priority).toBeUndefined();
        expect(paymentMethod.environment).toBeUndefined();
        expect(paymentMethod.capture).toBeUndefined();
        expect(paymentMethod.retry).toBeUndefined();
        expect(paymentMethod.credentials).toBeUndefined();
    });

    it('should create and set empty properties for a payment method object successfully', () => {
        const paymentMethod = new PaymentMethod({
            acquirer: 'stone',
            priority: 100,
            environment: 'test',
            capture: true,
            retry: true,
            credentials: {
                stone_code: 'xxxxx',
                stone_sak: 'xxxxxx'
            },
        });

        paymentMethod.acquirer = null;
        paymentMethod.priority = null;
        paymentMethod.environment = null;
        paymentMethod.capture = null;
        paymentMethod.retry = null;
        paymentMethod.credentials = null;

        expect(paymentMethod.acquirer).toBeNull();
        expect(paymentMethod.priority).toBeNull();
        expect(paymentMethod.environment).toBeNull();
        expect(paymentMethod.capture).toBeNull();
        expect(paymentMethod.retry).toBeNull();
        expect(paymentMethod.credentials).toBeNull();
    });
});
