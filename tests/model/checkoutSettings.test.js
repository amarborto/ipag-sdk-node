const CheckoutSettings = require('../../src/model/checkoutSettings');

describe('CheckoutSettings', () => {
    it('should create a checkout settings object with the constructor successfully', () => {
        const checkoutSettings = new CheckoutSettings({
            max_installments: 12,
            interest_free_installments: 12,
            min_installment_value: 0.00,
            interest: 0.00,
            fixed_installment: 12,
            payment_method: 'all'
        });

        expect(checkoutSettings.max_installments).toBe(12);
        expect(checkoutSettings.interest_free_installments).toBe(12);
        expect(checkoutSettings.min_installment_value).toBe(0.00);
        expect(checkoutSettings.interest).toBe(0.00);
        expect(checkoutSettings.fixed_installment).toBe(12);
        expect(checkoutSettings.payment_method).toBe('all');
    });

    it('should create a checkout settings object and set the values successfully', () => {
        const checkoutSettings = new CheckoutSettings();
        checkoutSettings.max_installments = 12;
        checkoutSettings.interest_free_installments = 12;
        checkoutSettings.min_installment_value = 0.00;
        checkoutSettings.interest = 0.00;
        checkoutSettings.fixed_installment = 12;
        checkoutSettings.payment_method = 'all';

        expect(checkoutSettings.max_installments).toBe(12);
        expect(checkoutSettings.interest_free_installments).toBe(12);
        expect(checkoutSettings.min_installment_value).toBe(0.00);
        expect(checkoutSettings.interest).toBe(0.00);
        expect(checkoutSettings.fixed_installment).toBe(12);
        expect(checkoutSettings.payment_method).toBe('all');
    });

    it('should create an empty checkout settings object successfully', () => {
        const checkoutSettings = new CheckoutSettings();

        expect(checkoutSettings.max_installments).toBeUndefined();
        expect(checkoutSettings.interest_free_installments).toBeUndefined();
        expect(checkoutSettings.min_installment_value).toBeUndefined();
        expect(checkoutSettings.interest).toBeUndefined();
        expect(checkoutSettings.fixed_installment).toBeUndefined();
        expect(checkoutSettings.payment_method).toBeUndefined();
    });

    it('should create and set empty properties for a checkout settings object successfully', () => {
        const checkoutSettings = new CheckoutSettings({
            max_installments: 12,
            interest_free_installments: 12,
            min_installment_value: 0.00,
            interest: 0.00,
            fixed_installment: 12,
            payment_method: 'all'
        });

        checkoutSettings.max_installments = null;
        checkoutSettings.interest_free_installments = null;
        checkoutSettings.min_installment_value = null;
        checkoutSettings.interest = null;
        checkoutSettings.fixed_installment = null;
        checkoutSettings.payment_method = null;

        expect(checkoutSettings.max_installments).toBeNull();
        expect(checkoutSettings.interest_free_installments).toBeNull();
        expect(checkoutSettings.min_installment_value).toBeNull();
        expect(checkoutSettings.interest).toBeNull();
        expect(checkoutSettings.fixed_installment).toBeNull();
        expect(checkoutSettings.payment_method).toBeNull();
    });
});
