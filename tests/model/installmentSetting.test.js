const InstallmentSetting = require('../../src/model/installmentSetting');

describe('InstallmentSetting', () => {
    it('should create an installment settings object with the constructor successfully', () => {
        const installmentSettings = new InstallmentSetting({
            max_installments: 12,
            min_installment_value: 5,
            interest: 0,
            interest_free_installments: 12,
            fixed_installment: 12,
            payment_method: 'creditcard'
        });

        expect(installmentSettings.max_installments).toBe(12);
        expect(installmentSettings.min_installment_value).toBe(5);
        expect(installmentSettings.interest).toBe(0);
        expect(installmentSettings.interest_free_installments).toBe(12);
        expect(installmentSettings.fixed_installment).toBe(12);
        expect(installmentSettings.payment_method).toBe('creditcard');
    });

    it('should create an installment settings object and set the values successfully', () => {
        const installmentSettings = new InstallmentSetting();
        installmentSettings.max_installments = 12;
        installmentSettings.min_installment_value = 5;
        installmentSettings.interest = 0;
        installmentSettings.interest_free_installments = 12;
        installmentSettings.fixed_installment = 12;
        installmentSettings.payment_method = 'creditcard';

        expect(installmentSettings.max_installments).toBe(12);
        expect(installmentSettings.min_installment_value).toBe(5);
        expect(installmentSettings.interest).toBe(0);
        expect(installmentSettings.interest_free_installments).toBe(12);
        expect(installmentSettings.fixed_installment).toBe(12);
        expect(installmentSettings.payment_method).toBe('creditcard');
    });

    it('should create an empty installment settings object successfully', () => {
        const installmentSettings = new InstallmentSetting();

        expect(installmentSettings.max_installments).toBeUndefined();
        expect(installmentSettings.min_installment_value).toBeUndefined();
        expect(installmentSettings.interest).toBeUndefined();
        expect(installmentSettings.interest_free_installments).toBeUndefined();
        expect(installmentSettings.fixed_installment).toBeUndefined();
        expect(installmentSettings.payment_method).toBeUndefined();
    });

    it('should create and set empty properties for an installment settings object successfully', () => {
        const installmentSettings = new InstallmentSetting({
            max_installments: 12,
            min_installment_value: 5,
            interest: 0,
            interest_free_installments: 12,
            fixed_installment: 12,
            payment_method: 'creditcard'
        });

        installmentSettings.max_installments = null;
        installmentSettings.min_installment_value = null;
        installmentSettings.interest = null;
        installmentSettings.interest_free_installments = null;
        installmentSettings.fixed_installment = null;
        installmentSettings.payment_method = null;

        expect(installmentSettings.max_installments).toBeNull();
        expect(installmentSettings.min_installment_value).toBeNull();
        expect(installmentSettings.interest).toBeNull();
        expect(installmentSettings.interest_free_installments).toBeNull();
        expect(installmentSettings.fixed_installment).toBeNull();
        expect(installmentSettings.payment_method).toBeNull();
    });
});
