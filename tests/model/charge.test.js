const Charge = require('../../src/model/charge');
const Customer = require('../../src/model/customer');
const CheckoutSettings = require('../../src/model/checkoutSettings');

describe('Charge', () => {
    it('should create a charge object with the constructor successfully', () => {
        const charge = new Charge({
            amount: 150.50,
            description: 'Cobrança referente a negociação de débito pendente na Empresa X',
            due_date: '2020-10-30',
            frequency: 1,
            interval: 'month',
            type: 'charge',
            last_charge_date: '2020-10-30',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            auto_debit: false,
            installments: 12,
            is_active: true,
            products: [1, 2, 3],
            customer: {
                name: 'Maria Francisca',
            },
            checkout_settings: {
                max_installments: 12,
            }
        });

        expect(charge.amount).toBe(150.50);
        expect(charge.description).toBe('Cobrança referente a negociação de débito pendente na Empresa X');
        expect(charge.due_date).toBe('2020-10-30');
        expect(charge.frequency).toBe(1);
        expect(charge.interval).toBe('month');
        expect(charge.type).toBe('charge');
        expect(charge.last_charge_date).toBe('2020-10-30');
        expect(charge.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(charge.auto_debit).toBe(false);
        expect(charge.installments).toBe(12);
        expect(charge.is_active).toBe(true);
        expect(charge.products).toEqual([1, 2, 3]);
        expect(charge.customer).toBeInstanceOf(Customer);
        expect(charge.customer.name).toBe('Maria Francisca');
        expect(charge.checkout_settings).toBeInstanceOf(CheckoutSettings);
        expect(charge.checkout_settings.max_installments).toBe(12);
    });

    it('should create a charge object and set the values successfully', () => {
        const charge = new Charge();
        charge.amount = 150.50;
        charge.description = 'Cobrança referente a negociação de débito pendente na Empresa X';
        charge.due_date = '2020-10-30';
        charge.frequency = 1;
        charge.interval = 'month';
        charge.type = 'charge';
        charge.last_charge_date = '2020-10-30';
        charge.callback_url = 'https://ipag-sdk.requestcatcher.com/callback';
        charge.auto_debit = false;
        charge.installments = 12;
        charge.is_active = true;
        charge.products = [1, 2, 3];
        charge.customer = new Customer({
            name: 'Maria Francisca',
        });
        charge.checkout_settings = new CheckoutSettings({
            max_installments: 12,
        });

        expect(charge.amount).toBe(150.50);
        expect(charge.description).toBe('Cobrança referente a negociação de débito pendente na Empresa X');
        expect(charge.due_date).toBe('2020-10-30');
        expect(charge.frequency).toBe(1);
        expect(charge.interval).toBe('month');
        expect(charge.type).toBe('charge');
        expect(charge.last_charge_date).toBe('2020-10-30');
        expect(charge.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(charge.auto_debit).toBe(false);
        expect(charge.installments).toBe(12);
        expect(charge.is_active).toBe(true);
        expect(charge.products).toEqual([1, 2, 3]);
        expect(charge.customer).toBeInstanceOf(Customer);
        expect(charge.customer.name).toBe('Maria Francisca');
        expect(charge.checkout_settings).toBeInstanceOf(CheckoutSettings);
        expect(charge.checkout_settings.max_installments).toBe(12);
    });

    it('should create an empty charge object successfully', () => {
        const charge = new Charge();

        expect(charge.amount).toBeUndefined();
        expect(charge.description).toBeUndefined();
        expect(charge.due_date).toBeUndefined();
        expect(charge.frequency).toBeUndefined();
        expect(charge.interval).toBeUndefined();
        expect(charge.type).toBeUndefined();
        expect(charge.last_charge_date).toBeUndefined();
        expect(charge.callback_url).toBeUndefined();
        expect(charge.auto_debit).toBeUndefined();
        expect(charge.installments).toBeUndefined();
        expect(charge.is_active).toBeUndefined();
        expect(charge.products).toBeUndefined();
        expect(charge.customer).toBeUndefined();
        expect(charge.checkout_settings).toBeUndefined();
    });

    it('should create and set empty properties for a charge object successfully', () => {
        const charge = new Charge({
            amount: 150.50,
            description: 'Cobrança referente a negociação de débito pendente na Empresa X',
            due_date: '2020-10-30',
            frequency: 1,
            interval: 'month',
            type: 'charge',
            last_charge_date: '2020-10-30',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            auto_debit: false,
            installments: 12,
            is_active: true,
            products: [1, 2, 3],
            customer: {
                name: 'Maria Francisca',
            },
            checkout_settings: {
                max_installments: 12,
            }
        });

        charge.amount = null;
        charge.description = null;
        charge.due_date = null;
        charge.frequency = null;
        charge.interval = null;
        charge.type = null;
        charge.last_charge_date = null;
        charge.callback_url = null;
        charge.auto_debit = null;
        charge.installments = null;
        charge.is_active = null;
        charge.products = null;
        charge.customer = null;
        charge.checkout_settings = null;

        expect(charge.amount).toBeNull();
        expect(charge.description).toBeNull();
        expect(charge.due_date).toBeNull();
        expect(charge.frequency).toBeNull();
        expect(charge.interval).toBeNull();
        expect(charge.type).toBeNull();
        expect(charge.last_charge_date).toBeNull();
        expect(charge.callback_url).toBeNull();
        expect(charge.auto_debit).toBeNull();
        expect(charge.installments).toBeNull();
        expect(charge.is_active).toBeNull();
        expect(charge.products).toBeNull();
        expect(charge.customer).toBeNull();
        expect(charge.checkout_settings).toBeNull();
    });
});