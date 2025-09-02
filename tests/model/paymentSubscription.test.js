const PaymentSubscription = require('../../src/model/paymentSubscription');
const Trial = require('../../src/model/trial');

describe('PaymentSubscription', () => {
    it('should create a payment subscription object with the constructor successfully', () => {
        const paymentSubscription = new PaymentSubscription({
            frequency: 1,
            interval: 'month',
            start_date: '2019-01-01',
            amount: 100.9,
            installments: 1,
            cycles: 1,
            trial: {
                amount: 100.9,
            }
        });

        expect(paymentSubscription.frequency).toBe(1);
        expect(paymentSubscription.interval).toBe('month');
        expect(paymentSubscription.start_date).toBe('2019-01-01');
        expect(paymentSubscription.amount).toBe(100.9);
        expect(paymentSubscription.installments).toBe(1);
        expect(paymentSubscription.cycles).toBe(1);
        expect(paymentSubscription.trial).toBeInstanceOf(Trial);
        expect(paymentSubscription.trial.amount).toBe(100.9);
    });

    it('should create a payment subscription object and set the values successfully', () => {
        const paymentSubscription = new PaymentSubscription();
        paymentSubscription.frequency = 1;
        paymentSubscription.interval = 'month';
        paymentSubscription.start_date = '2019-01-01';
        paymentSubscription.amount = 100.9;
        paymentSubscription.installments = 1;
        paymentSubscription.cycles = 1;
        paymentSubscription.trial = new Trial({
            amount: 100.9,
        });

        expect(paymentSubscription.frequency).toBe(1);
        expect(paymentSubscription.interval).toBe('month');
        expect(paymentSubscription.start_date).toBe('2019-01-01');
        expect(paymentSubscription.amount).toBe(100.9);
        expect(paymentSubscription.installments).toBe(1);
        expect(paymentSubscription.cycles).toBe(1);
        expect(paymentSubscription.trial).toBeInstanceOf(Trial);
        expect(paymentSubscription.trial.amount).toBe(100.9);
    });

    it('should create an empty payment subscription object successfully', () => {
        const paymentSubscription = new PaymentSubscription();

        expect(paymentSubscription.frequency).toBeUndefined();
        expect(paymentSubscription.interval).toBeUndefined();
        expect(paymentSubscription.start_date).toBeUndefined();
        expect(paymentSubscription.amount).toBeUndefined();
        expect(paymentSubscription.installments).toBeUndefined();
        expect(paymentSubscription.cycles).toBeUndefined();
        expect(paymentSubscription.trial).toBeUndefined();
    });

    it('should create and set empty properties for a payment subscription object successfully', () => {
        const paymentSubscription = new PaymentSubscription({
            frequency: 1,
            interval: 'month',
            start_date: '2019-01-01',
            amount: 100.9,
            installments: 1,
            cycles: 1,
            trial: {
                amount: 100.9,
            }
        });

        paymentSubscription.frequency = null;
        paymentSubscription.interval = null;
        paymentSubscription.start_date = null;
        paymentSubscription.amount = null;
        paymentSubscription.installments = null;
        paymentSubscription.cycles = null;
        paymentSubscription.trial = null;

        expect(paymentSubscription.frequency).toBeNull();
        expect(paymentSubscription.interval).toBeNull();
        expect(paymentSubscription.start_date).toBeNull();
        expect(paymentSubscription.amount).toBeNull();
        expect(paymentSubscription.installments).toBeNull();
        expect(paymentSubscription.cycles).toBeNull();
        expect(paymentSubscription.trial).toBeNull();
    });
});
