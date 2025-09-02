const PaymentCard = require('../../src/model/paymentCard');

describe('PaymentCard', () => {
    it('should create a payment card object with the constructor successfully', () => {
        const paymentCard = new PaymentCard({
            holder: 'Frederic Sales',
            number: '4024007112512933',
            expiry_month: '12',
            expiry_year: '2023',
            cvv: '431',
            token: '123abc',
            tokenize: true
        });

        expect(paymentCard.holder).toBe('Frederic Sales');
        expect(paymentCard.number).toBe('4024007112512933');
        expect(paymentCard.expiry_month).toBe('12');
        expect(paymentCard.expiry_year).toBe('2023');
        expect(paymentCard.cvv).toBe('431');
        expect(paymentCard.token).toBe('123abc');
        expect(paymentCard.tokenize).toBe(true);
    });

    it('should create a payment card object and set the values successfully', () => {
        const paymentCard = new PaymentCard();
        paymentCard.holder = 'Frederic Sales';
        paymentCard.number = '4024007112512933';
        paymentCard.expiry_month = '12';
        paymentCard.expiry_year = '2023';
        paymentCard.cvv = '123';
        paymentCard.token = '123abc';
        paymentCard.tokenize = true;

        expect(paymentCard.holder).toBe('Frederic Sales');
        expect(paymentCard.number).toBe('4024007112512933');
        expect(paymentCard.expiry_month).toBe('12');
        expect(paymentCard.expiry_year).toBe('2023');
        expect(paymentCard.cvv).toBe('123');
        expect(paymentCard.token).toBe('123abc');
        expect(paymentCard.tokenize).toBe(true);
    });

    it('should create an empty payment card object successfully', () => {
        const paymentCard = new PaymentCard();

        expect(paymentCard.holder).toBeUndefined();
        expect(paymentCard.number).toBeUndefined();
        expect(paymentCard.expiry_month).toBeUndefined();
        expect(paymentCard.expiry_year).toBeUndefined();
        expect(paymentCard.cvv).toBeUndefined();
        expect(paymentCard.token).toBeUndefined();
        expect(paymentCard.tokenize).toBeUndefined();
    });

    it('should create and set empty properties for a payment card object successfully', () => {
        const paymentCard = new PaymentCard({
            holder: 'Frederic Sales',
            number: '4024007112512933',
            expiry_month: '12',
            expiry_year: '2023',
            cvv: '431',
            token: '123abc',
            tokenize: true
        });

        paymentCard.holder = null;
        paymentCard.number = null;
        paymentCard.expiry_month = null;
        paymentCard.expiry_year = null;
        paymentCard.cvv = null;
        paymentCard.token = null;
        paymentCard.tokenize = null;

        expect(paymentCard.holder).toBeNull();
        expect(paymentCard.number).toBeNull();
        expect(paymentCard.expiry_month).toBeNull();
        expect(paymentCard.expiry_year).toBeNull();
        expect(paymentCard.cvv).toBeNull();
        expect(paymentCard.token).toBeNull();
        expect(paymentCard.tokenize).toBeNull();
    });
});
