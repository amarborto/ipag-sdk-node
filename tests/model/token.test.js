const Token = require('../../src/model/token');
const Card = require('../../src/model/card');
const Holder = require('../../src/model/holder');

describe('Token', () => {
    it('should create a token object with the constructor successfully', () => {
        const token = new Token({
            value: '123',
            validated_at: '2020-12-25',
            expires_at: '2020-12-26',
            card: {
                holderName: 'Frederic Sales',
                number: '4024007112512933',
                expiryMonth: '02',
                expiryYear: '2023',
                cvv: '431'
            },
            holder: {
                name: 'Frederic Sales',
                cpfCnpj: '79999338801',
                mobilePhone: '1899767866',
                birthdate: '1989-03-28',
                address: {
                    street: 'Rua dos Testes',
                    number: '100',
                    district: 'Tamboré',
                    zipcode: '06460080',
                    city: 'Barueri',
                    state: 'SP'
                }
            }
        });

        expect(token.value).toBe('123');
        expect(token.validated_at).toBe('2020-12-25');
        expect(token.expires_at).toBe('2020-12-26');
        expect(token.card).toBeInstanceOf(Card);
        expect(token.holder).toBeInstanceOf(Holder);
    });

    it('should create a token object and set the values successfully', () => {
        const token = new Token();
        token.value = '123';
        token.validated_at = '2020-12-25';
        token.expires_at = '2020-12-26';
        token.card = new Card({
            holderName: 'Frederic Sales',
            number: '4024007112512933',
            expiryMonth: '02',
            expiryYear: '2023',
            cvv: '431'
        });
        token.holder = new Holder({
            name: 'Frederic Sales',
            cpfCnpj: '79999338801',
            mobilePhone: '1899767866',
            birthdate: '1989-03-28',
            address: {
                street: 'Rua dos Testes',
                number: '100',
                district: 'Tamboré',
                zipcode: '06460080',
                city: 'Barueri',
                state: 'SP'
            }
        });

        expect(token.value).toBe('123');
        expect(token.validated_at).toBe('2020-12-25');
        expect(token.expires_at).toBe('2020-12-26');
        expect(token.card).toBeInstanceOf(Card);
        expect(token.holder).toBeInstanceOf(Holder);
    });

    it('should create an empty token object successfully', () => {
        const token = new Token();

        expect(token.value).toBeUndefined();
        expect(token.validated_at).toBeUndefined();
        expect(token.expires_at).toBeUndefined();
        expect(token.card).toBeUndefined();
        expect(token.holder).toBeUndefined();
    });

    it('should create and set empty properties for a token object successfully', () => {
        const token = new Token({
            value: '123',
            validated_at: '2020-12-25',
            expires_at: '2020-12-26',
            card: {
                holderName: 'Frederic Sales',
                number: '4024007112512933',
                expiryMonth: '02',
                expiryYear: '2023',
                cvv: '431'
            },
            holder: {
                name: 'Frederic Sales',
                cpfCnpj: '79999338801',
                mobilePhone: '1899767866',
                birthdate: '1989-03-28',
                address: {
                    street: 'Rua dos Testes',
                    number: '100',
                    district: 'Tamboré',
                    zipcode: '06460080',
                    city: 'Barueri',
                    state: 'SP'
                }
            }
        });

        token.value = null;
        token.validated_at = null;
        token.expires_at = null;
        token.card = null;
        token.holder = null;

        expect(token.value).toBeNull();
        expect(token.validated_at).toBeNull();
        expect(token.expires_at).toBeNull();
        expect(token.card).toBeNull();
        expect(token.holder).toBeNull();
    });
});
