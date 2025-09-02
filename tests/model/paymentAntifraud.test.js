const PaymentAntifraud = require('../../src/model/paymentAntifraud');

describe('PaymentAntifraud', () => {
    it('should create a payment antifraud object with the constructor successfully', () => {
        const paymentAntifraud = new PaymentAntifraud({
            fingerprint: 'abc123',
            provider: 'abc'
        });

        expect(paymentAntifraud.fingerprint).toBe('abc123');
        expect(paymentAntifraud.provider).toBe('abc');
    });

    it('should create a payment antifraud object and set the values successfully', () => {
        const paymentAntifraud = new PaymentAntifraud();
        paymentAntifraud.fingerprint = 'abc123';
        paymentAntifraud.provider = 'abc';

        expect(paymentAntifraud.fingerprint).toBe('abc123');
        expect(paymentAntifraud.provider).toBe('abc');
    });

    it('should create an empty payment antifraud object successfully', () => {
        const paymentAntifraud = new PaymentAntifraud();

        expect(paymentAntifraud.fingerprint).toBeUndefined();
        expect(paymentAntifraud.provider).toBeUndefined();
    });

    it('should create and set empty properties for a payment antifraud object successfully', () => {
        const paymentAntifraud = new PaymentAntifraud({
            fingerprint: 'abc123',
            provider: 'abc'
        });

        paymentAntifraud.fingerprint = null;
        paymentAntifraud.provider = null;

        expect(paymentAntifraud.fingerprint).toBeNull();
        expect(paymentAntifraud.provider).toBeNull();
    });
});
