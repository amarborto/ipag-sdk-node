const Card = require('../../src/model/card');

describe('Card', () => {
    it('should create a card object with the constructor successfully', () => {
        const card = new Card({
            holderName: 'Frederic Sales',
            number: '4024 0071 1251 2933',
            expiryMonth: '12',
            expiryYear: '2023',
            cvv: '431',
            token: '123abc',
            tokenize: true
        });

        expect(card.holderName).toBe('Frederic Sales');
        expect(card.number).toBe('4024 0071 1251 2933');
        expect(card.expiryMonth).toBe('12');
        expect(card.expiryYear).toBe('2023');
        expect(card.cvv).toBe('431');
        expect(card.token).toBe('123abc');
        expect(card.tokenize).toBe(true);
    });

    it('should create a card object and set the values successfully', () => {
        const card = new Card();
        card.holderName = 'Frederic Sales';
        card.number = '4024 0071 1251 2933';
        card.expiryMonth = '02';
        card.expiryYear = '2023';
        card.cvv = '431';
        card.token = '123abc';
        card.tokenize = true;

        expect(card.holderName).toBe('Frederic Sales');
        expect(card.number).toBe('4024 0071 1251 2933');
        expect(card.expiryMonth).toBe('02');
        expect(card.expiryYear).toBe('2023');
        expect(card.cvv).toBe('431');
        expect(card.token).toBe('123abc');
        expect(card.tokenize).toBe(true);
    });

    it('should create an empty card object successfully', () => {
        const card = new Card();

        expect(card.holderName).toBeUndefined();
        expect(card.number).toBeUndefined();
        expect(card.expiryMonth).toBeUndefined();
        expect(card.expiryYear).toBeUndefined();
        expect(card.cvv).toBeUndefined();
        expect(card.token).toBeUndefined();
        expect(card.tokenize).toBeUndefined();
    });

    it('should create and set empty properties for a card object successfully', () => {
        const card = new Card({
            holderName: 'Frederic Sales',
            number: '4024 0071 1251 2933',
            expiryMonth: '02',
            expiryYear: '2023',
            cvv: '431',
            token: '123abc',
            tokenize: true
        });

        card.holderName = null;
        card.number = null;
        card.expiryMonth = null;
        card.expiryYear = null;
        card.cvv = null;
        card.token = null;
        card.tokenize = null;

        expect(card.holderName).toBeNull();
        expect(card.number).toBeNull();
        expect(card.expiryMonth).toBeNull();
        expect(card.expiryYear).toBeNull();
        expect(card.cvv).toBeNull();
        expect(card.token).toBeNull();
        expect(card.tokenize).toBeNull();
    });
});