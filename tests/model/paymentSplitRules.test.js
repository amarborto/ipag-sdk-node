const PaymentSplitRules = require('../../src/model/paymentSplitRules');

describe('PaymentSplitRules', () => {
    it('should create a payment split rules object with the constructor successfully', () => {
        const paymentSplitRules = new PaymentSplitRules({
            seller_id: '10000',
            amount: 99.9,
            percentage: 3.0,
            liable: true,
            charge_processing_fee: true,
            hold_receivables: true,
        });

        expect(paymentSplitRules.seller_id).toBe('10000');
        expect(paymentSplitRules.amount).toBe(99.9);
        expect(paymentSplitRules.percentage).toBe(3.0);
        expect(paymentSplitRules.liable).toBe(true);
        expect(paymentSplitRules.charge_processing_fee).toBe(true);
        expect(paymentSplitRules.hold_receivables).toBe(true);
    });

    it('should create a payment split rules object and set the values successfully', () => {
        const paymentSplitRules = new PaymentSplitRules();
        paymentSplitRules.seller_id = '10000';
        paymentSplitRules.amount = 99.9;
        paymentSplitRules.percentage = 3.0;
        paymentSplitRules.liable = true;
        paymentSplitRules.charge_processing_fee = true;
        paymentSplitRules.hold_receivables = true;

        expect(paymentSplitRules.seller_id).toBe('10000');
        expect(paymentSplitRules.amount).toBe(99.9);
        expect(paymentSplitRules.percentage).toBe(3.0);
        expect(paymentSplitRules.liable).toBe(true);
        expect(paymentSplitRules.charge_processing_fee).toBe(true);
        expect(paymentSplitRules.hold_receivables).toBe(true);
    });

    it('should create an empty payment split rules object successfully', () => {
        const paymentSplitRules = new PaymentSplitRules();

        expect(paymentSplitRules.seller_id).toBeUndefined();
        expect(paymentSplitRules.amount).toBeUndefined();
        expect(paymentSplitRules.percentage).toBeUndefined();
        expect(paymentSplitRules.liable).toBeUndefined();
        expect(paymentSplitRules.charge_processing_fee).toBeUndefined();
        expect(paymentSplitRules.hold_receivables).toBeUndefined();
    });

    it('should create and set empty properties for a payment split rules object successfully', () => {
        const paymentSplitRules = new PaymentSplitRules({
            seller_id: '10000',
            amount: 99.9,
            percentage: 3.0,
            liable: true,
            charge_processing_fee: true,
            hold_receivables: true,
        });

        paymentSplitRules.seller_id = null;
        paymentSplitRules.amount = null;
        paymentSplitRules.percentage = null;
        paymentSplitRules.liable = null;
        paymentSplitRules.charge_processing_fee = null;
        paymentSplitRules.hold_receivables = null;

        expect(paymentSplitRules.seller_id).toBeNull();
        expect(paymentSplitRules.amount).toBeNull();
        expect(paymentSplitRules.percentage).toBeNull();
        expect(paymentSplitRules.liable).toBeNull();
        expect(paymentSplitRules.charge_processing_fee).toBeNull();
        expect(paymentSplitRules.hold_receivables).toBeNull();
    });
});
