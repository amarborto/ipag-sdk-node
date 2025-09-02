const PaymentTransaction = require('../../src/model/paymentTransaction');
const PaymentAntifraud = require('../../src/model/paymentAntifraud');
const Payment = require('../../src/model/payment');
const Customer = require('../../src/model/customer');
const Product = require('../../src/model/product');
const PaymentSubscription = require('../../src/model/paymentSubscription');
const PaymentSplitRules = require('../../src/model/paymentSplitRules');
const Event = require('../../src/model/event');

describe('PaymentTransaction', () => {
    it('should create a payment transaction object with the constructor successfully', () => {
        const paymentTransaction = new PaymentTransaction({
            amount: 100.0,
            order_id: '123456',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            antifraud: {
                fingerprint: '123',
                provider: 'test',
            },
            payment: {
                type: 'card',
                method: 'visa',
                card: {
                    holder: 'teste',
                    number: '123',
                    cvv: '123',
                },
                boleto: {
                    due_date: '2018-07-31',
                    instructions: [
                        'Instruções 1',
                        'Instruções 2',
                    ]
                },
            },
            customer: {
                name: 'Lívia Julia Eduarda Barros',
                cpf_cnpj: '074.598.263-83',
                billing_address: {
                    street: 'Rua A',
                },
                shipping_address: {
                    street: 'Rua A',
                },
            },
            products: [
                {
                    name: 'Produto 1',
                },
                {
                    name: 'Produto 2',
                }
            ],
            subscription: {
                frequency: 1,
                trial: {
                    amount: 100.9,
                }
            },
            split_rules: [
                {
                    seller_id: 'vendedor1@mail.me',
                    amount: 15.87,
                },
                {
                    seller_id: 'vendedor2@mail.me',
                    percentage: 20.0,
                },
            ],
            event: {
                name: 'Reveillon - 2022',
                venue: {
                    name: 'Campo - Clube das Laranjeiras',
                },
                tickets: [
                    {
                        id: 'EVENT001',
                    },
                    {
                        id: 'EVENT002',
                    }
                ]
            }
        });

        expect(paymentTransaction.amount).toBe(100.0);
        expect(paymentTransaction.order_id).toBe('123456');
        expect(paymentTransaction.callback_url).toBe('https://ipag-sdk.requestcatcher.com/callback');
        expect(paymentTransaction.antifraud).toBeInstanceOf(PaymentAntifraud);
        expect(paymentTransaction.antifraud.fingerprint).toBe('123');
        expect(paymentTransaction.antifraud.provider).toBe('test');
        expect(paymentTransaction.payment).toBeInstanceOf(Payment);
        expect(paymentTransaction.payment.type).toBe('card');
        expect(paymentTransaction.payment.method).toBe('visa');
        expect(paymentTransaction.payment.card.holder).toBe('teste');
        expect(paymentTransaction.payment.card.number).toBe('123');
        expect(paymentTransaction.payment.card.cvv).toBe('123');
        expect(paymentTransaction.payment.boleto.due_date).toBe('2018-07-31');
        expect(paymentTransaction.payment.boleto.instructions).toEqual(['Instruções 1', 'Instruções 2']);
        expect(paymentTransaction.customer).toBeInstanceOf(Customer);
        expect(paymentTransaction.customer.name).toBe('Lívia Julia Eduarda Barros');
        expect(paymentTransaction.customer.cpf_cnpj).toBe('074.598.263-83');
        expect(paymentTransaction.customer.billing_address.street).toBe('Rua A');
        expect(paymentTransaction.customer.shipping_address.street).toBe('Rua A');
        expect(paymentTransaction.products[0]).toBeInstanceOf(Product);
        expect(paymentTransaction.products[0].name).toBe('Produto 1');
        expect(paymentTransaction.products[1]).toBeInstanceOf(Product);
        expect(paymentTransaction.products[1].name).toBe('Produto 2');
        expect(paymentTransaction.subscription).toBeInstanceOf(PaymentSubscription);
        expect(paymentTransaction.subscription.frequency).toBe(1);
        expect(paymentTransaction.subscription.trial.amount).toBe(100.9);
        expect(paymentTransaction.split_rules[0]).toBeInstanceOf(PaymentSplitRules);
        expect(paymentTransaction.split_rules[0].seller_id).toBe('vendedor1@mail.me');
        expect(paymentTransaction.split_rules[0].amount).toBe(15.87);
        expect(paymentTransaction.split_rules[1]).toBeInstanceOf(PaymentSplitRules);
        expect(paymentTransaction.split_rules[1].seller_id).toBe('vendedor2@mail.me');
        expect(paymentTransaction.split_rules[1].percentage).toBe(20.0);
        expect(paymentTransaction.event).toBeInstanceOf(Event);
        expect(paymentTransaction.event.name).toBe('Reveillon - 2022');
        expect(paymentTransaction.event.venue.name).toBe('Campo - Clube das Laranjeiras');
        expect(paymentTransaction.event.tickets[0].id).toBe('EVENT001');
        expect(paymentTransaction.event.tickets[1].id).toBe('EVENT002');
    });
});
