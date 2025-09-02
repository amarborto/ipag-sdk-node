const PaymentLink = require('../../src/model/paymentLink');
const Buttons = require('../../src/model/buttons');
const CheckoutSettings = require('../../src/model/checkoutSettings');

describe('PaymentLink', () => {
    it('should create a payment link object with the constructor successfully', () => {
        const paymentLink = new PaymentLink({
            external_code: '131',
            amount: 0,
            description: 'LINK DE PAGAMENTO SUPER BACANA',
            expireAt: '2020-12-30 23:00:00',
            buttons: {
                enable: false,
            },
            checkout_settings: {
                max_installments: 12,
            },
        });

        expect(paymentLink.external_code).toBe('131');
        expect(paymentLink.amount).toBe(0);
        expect(paymentLink.description).toBe('LINK DE PAGAMENTO SUPER BACANA');
        expect(paymentLink.expireAt).toBe('2020-12-30 23:00:00');
        expect(paymentLink.buttons).toBeInstanceOf(Buttons);
        expect(paymentLink.buttons.enable).toBe(false);
        expect(paymentLink.checkout_settings).toBeInstanceOf(CheckoutSettings);
        expect(paymentLink.checkout_settings.max_installments).toBe(12);
    });

    it('should create a payment link object and set the values successfully', () => {
        const paymentLink = new PaymentLink();
        paymentLink.external_code = '131';
        paymentLink.amount = 0;
        paymentLink.description = 'LINK DE PAGAMENTO SUPER BACANA';
        paymentLink.expireAt = '2020-12-30 23:00:00';
        paymentLink.buttons = new Buttons({
            enable: false,
        });
        paymentLink.checkout_settings = new CheckoutSettings({
            max_installments: 12,
        });

        expect(paymentLink.external_code).toBe('131');
        expect(paymentLink.amount).toBe(0);
        expect(paymentLink.description).toBe('LINK DE PAGAMENTO SUPER BACANA');
        expect(paymentLink.expireAt).toBe('2020-12-30 23:00:00');
        expect(paymentLink.buttons).toBeInstanceOf(Buttons);
        expect(paymentLink.buttons.enable).toBe(false);
        expect(paymentLink.checkout_settings).toBeInstanceOf(CheckoutSettings);
        expect(paymentLink.checkout_settings.max_installments).toBe(12);
    });

    it('should create an empty payment link object successfully', () => {
        const paymentLink = new PaymentLink();

        expect(paymentLink.external_code).toBeUndefined();
        expect(paymentLink.amount).toBeUndefined();
        expect(paymentLink.description).toBeUndefined();
        expect(paymentLink.expireAt).toBeUndefined();
        expect(paymentLink.buttons).toBeUndefined();
        expect(paymentLink.checkout_settings).toBeUndefined();
    });

    it('should create and set empty properties for a payment link object successfully', () => {
        const paymentLink = new PaymentLink({
            external_code: '131',
            amount: 0,
            description: 'LINK DE PAGAMENTO SUPER BACANA',
            expireAt: '2020-12-30 23:00:00',
            buttons: {
                enable: false,
            },
            checkout_settings: {
                max_installments: 12,
            },
        });

        paymentLink.external_code = null;
        paymentLink.amount = null;
        paymentLink.description = null;
        paymentLink.expireAt = null;
        paymentLink.buttons = null;
        paymentLink.checkout_settings = null;

        expect(paymentLink.external_code).toBeNull();
        expect(paymentLink.amount).toBeNull();
        expect(paymentLink.description).toBeNull();
        expect(paymentLink.expireAt).toBeNull();
        expect(paymentLink.buttons).toBeNull();
        expect(paymentLink.checkout_settings).toBeNull();
    });
});
