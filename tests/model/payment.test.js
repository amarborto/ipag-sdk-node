const Payment = require('../../src/model/payment');
const PaymentCard = require('../../src/model/paymentCard');
const Boleto = require('../../src/model/boleto');

describe('Payment', () => {
    it('should create a payment object with the constructor successfully', () => {
        const payment = new Payment({
            type: 'card',
            method: 'visa',
            installments: 1,
            capture: true,
            fraud_analysis: true,
            softdescriptor: 'Maria José',
            pix_expires_in: 1000,
            card: {
                holder: 'Maria José',
                number: '123456789',
                expiry_month: '01',
                expiry_year: '28',
                cvv: '123',
                brand: 'visa',
                token: '123456789',
                tokenize: true
            },
            boleto: {
                due_date: '2020-01-01',
                instructions: [
                    {
                        instruction: 'blábláblá'
                    },
                    {
                        instruction: 'lálálá'
                    },
                ]
            },
        });

        expect(payment.type).toBe('card');
        expect(payment.method).toBe('visa');
        expect(payment.installments).toBe(1);
        expect(payment.capture).toBe(true);
        expect(payment.fraud_analysis).toBe(true);
        expect(payment.softdescriptor).toBe('Maria José');
        expect(payment.pix_expires_in).toBe(1000);
        expect(payment.card).toBeInstanceOf(PaymentCard);
        expect(payment.card.holder).toBe('Maria José');
        expect(payment.card.number).toBe('123456789');
        expect(payment.card.expiry_month).toBe('01');
        expect(payment.card.expiry_year).toBe('28');
        expect(payment.card.cvv).toBe('123');
        expect(payment.card.brand).toBe('visa');
        expect(payment.card.token).toBe('123456789');
        expect(payment.card.tokenize).toBe(true);
        expect(payment.boleto).toBeInstanceOf(Boleto);
        expect(payment.boleto.due_date).toBe('2020-01-01');
        expect(payment.boleto.instructions).toEqual([
            {
                instruction: 'blábláblá'
            },
            {
                instruction: 'lálálá'
            },
        ]);
    });

    it('should create a payment object and set the values successfully', () => {
        const payment = new Payment();
        payment.type = 'card';
        payment.method = 'visa';
        payment.installments = 1;
        payment.capture = true;
        payment.fraud_analysis = true;
        payment.softdescriptor = 'Maria José';
        payment.pix_expires_in = 1000;
        payment.card = new PaymentCard({
            holder: 'Maria José',
            number: '123456789',
            expiry_month: '01',
            expiry_year: '28',
            cvv: '123',
            brand: 'visa',
            token: '123456789',
            tokenize: true
        });
        payment.boleto = new Boleto({
            due_date: '2020-01-01',
            instructions: [
                {
                    instruction: 'blábláblá'
                },
                {
                    instruction: 'lálálá'
                },
            ]
        });

        expect(payment.type).toBe('card');
        expect(payment.method).toBe('visa');
        expect(payment.installments).toBe(1);
        expect(payment.capture).toBe(true);
        expect(payment.fraud_analysis).toBe(true);
        expect(payment.softdescriptor).toBe('Maria José');
        expect(payment.pix_expires_in).toBe(1000);
        expect(payment.card).toBeInstanceOf(PaymentCard);
        expect(payment.card.holder).toBe('Maria José');
        expect(payment.card.number).toBe('123456789');
        expect(payment.card.expiry_month).toBe('01');
        expect(payment.card.expiry_year).toBe('28');
        expect(payment.card.cvv).toBe('123');
        expect(payment.card.brand).toBe('visa');
        expect(payment.card.token).toBe('123456789');
        expect(payment.card.tokenize).toBe(true);
        expect(payment.boleto).toBeInstanceOf(Boleto);
        expect(payment.boleto.due_date).toBe('2020-01-01');
        expect(payment.boleto.instructions).toEqual([
            {
                instruction: 'blábláblá'
            },
            {
                instruction: 'lálálá'
            },
        ]);
    });

    it('should create an empty payment object successfully', () => {
        const payment = new Payment();

        expect(payment.type).toBeUndefined();
        expect(payment.method).toBeUndefined();
        expect(payment.installments).toBeUndefined();
        expect(payment.capture).toBeUndefined();
        expect(payment.fraud_analysis).toBeUndefined();
        expect(payment.softdescriptor).toBeUndefined();
        expect(payment.pix_expires_in).toBeUndefined();
        expect(payment.card).toBeUndefined();
        expect(payment.boleto).toBeUndefined();
    });

    it('should create and set empty properties for a payment object successfully', () => {
        const payment = new Payment({
            type: 'card',
            method: 'visa',
            installments: 1,
            capture: true,
            fraud_analysis: true,
            softdescriptor: 'Maria José',
            pix_expires_in: 1000,
            card: {
                holder: 'Maria José',
                number: '123456789',
                expiry_month: '01',
                expiry_year: '28',
                cvv: '123',
                brand: 'visa',
                token: '123456789',
                tokenize: true
            },
            boleto: {
                due_date: '2020-01-01',
                instructions: [
                    {
                        instruction: 'blábláblá'
                    },
                    {
                        instruction: 'lálálá'
                    },
                ]
            },
        });

        payment.type = null;
        payment.method = null;
        payment.installments = null;
        payment.capture = null;
        payment.fraud_analysis = null;
        payment.softdescriptor = null;
        payment.pix_expires_in = null;
        payment.card = null;
        payment.boleto = null;

        expect(payment.type).toBeNull();
        expect(payment.method).toBeNull();
        expect(payment.installments).toBeNull();
        expect(payment.capture).toBeNull();
        expect(payment.fraud_analysis).toBeNull();
        expect(payment.softdescriptor).toBeNull();
        expect(payment.pix_expires_in).toBeNull();
        expect(payment.card).toBeNull();
        expect(payment.boleto).toBeNull();
    });
});
