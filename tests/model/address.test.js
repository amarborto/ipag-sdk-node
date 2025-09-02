const Address = require('../../src/model/address');

describe('Address', () => {
    it('should create an address object with the constructor successfully', () => {
        const address = new Address({
            street: 'Rua Agenor Vieira',
            number: 768,
            district: 'São Francisco',
            city: 'São Luís',
            complement: 'Sala 001',
            state: 'MA',
            zipcode: '65076-020'
        });

        expect(address.complement).toBe('Sala 001');
        expect(address.street).toBe('Rua Agenor Vieira');
        expect(address.number).toBe(768);
        expect(address.district).toBe('São Francisco');
        expect(address.city).toBe('São Luís');
        expect(address.state).toBe('MA');
        expect(address.zipcode).toBe('65076-020');
    });

    it('should create an address object and set the values successfully', () => {
        const address = new Address();
        address.street = 'Rua Agenor Vieira';
        address.number = '768';
        address.district = 'São Francisco';
        address.complement = 'Sala 001';
        address.city = 'São Luís';
        address.state = 'MA';
        address.zipcode = '65076020';

        expect(address.complement).toBe('Sala 001');
        expect(address.street).toBe('Rua Agenor Vieira');
        expect(address.number).toBe('768');
        expect(address.district).toBe('São Francisco');
        expect(address.city).toBe('São Luís');
        expect(address.state).toBe('MA');
        expect(address.zipcode).toBe('65076020');
    });

    it('should create an empty address object successfully', () => {
        const address = new Address();

        expect(address.complement).toBeUndefined();
        expect(address.street).toBeUndefined();
        expect(address.number).toBeUndefined();
        expect(address.district).toBeUndefined();
        expect(address.city).toBeUndefined();
        expect(address.state).toBeUndefined();
        expect(address.zipcode).toBeUndefined();
    });

    it('should create and set empty properties for an address object successfully', () => {
        const address = new Address({
            street: 'Rua Agenor Vieira',
            number: 768,
            district: 'São Francisco',
            city: 'São Luís',
            complement: 'Sala 001',
            state: 'MA',
            zipcode: '65076-020'
        });

        address.street = null;
        address.number = null;
        address.district = null;
        address.city = null;
        address.state = null;
        address.zipcode = null;
        address.complement = null;

        expect(address.complement).toBeNull();
        expect(address.street).toBeNull();
        expect(address.number).toBeNull();
        expect(address.district).toBeNull();
        expect(address.city).toBeNull();
        expect(address.state).toBeNull();
        expect(address.zipcode).toBeNull();
    });

    it('should accept address number property with letters', () => {
        const address = new Address();
        address.number = 'BR 163';
        expect(address.number).toBe('BR 163');
    });
});
