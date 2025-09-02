const Holder = require('../../src/model/holder');
const Address = require('../../src/model/address');

describe('Holder', () => {
    it('should create a holder object with the constructor successfully', () => {
        const holder = new Holder({
            name: 'Frederic Sales',
            cpfCnpj: '79999338801',
            mobilePhone: '1899767866',
            birthdate: '1989-03-28',
            address: {
                street: 'Rua A',
            }
        });

        expect(holder.name).toBe('Frederic Sales');
        expect(holder.cpfCnpj).toBe('79999338801');
        expect(holder.mobilePhone).toBe('1899767866');
        expect(holder.birthdate).toBe('1989-03-28');
        expect(holder.address).toBeInstanceOf(Address);
        expect(holder.address.street).toBe('Rua A');
    });

    it('should create a holder object and set the values successfully', () => {
        const holder = new Holder();
        holder.name = 'Frederic Sales';
        holder.cpfCnpj = '79999338801';
        holder.mobilePhone = '1899767866';
        holder.birthdate = '1989-03-28';
        holder.address = new Address({
            street: 'Rua A',
        });

        expect(holder.name).toBe('Frederic Sales');
        expect(holder.cpfCnpj).toBe('79999338801');
        expect(holder.mobilePhone).toBe('1899767866');
        expect(holder.birthdate).toBe('1989-03-28');
        expect(holder.address).toBeInstanceOf(Address);
        expect(holder.address.street).toBe('Rua A');
    });

    it('should create an empty holder object successfully', () => {
        const holder = new Holder();

        expect(holder.name).toBeUndefined();
        expect(holder.cpfCnpj).toBeUndefined();
        expect(holder.mobilePhone).toBeUndefined();
        expect(holder.birthdate).toBeUndefined();
        expect(holder.address).toBeUndefined();
    });

    it('should create and set empty properties for a holder object successfully', () => {
        const holder = new Holder({
            name: 'Frederic Sales',
            cpfCnpj: '79999338801',
            mobilePhone: '1899767866',
            birthdate: '1989-03-28',
            address: {
                street: 'Rua A',
            }
        });

        holder.name = null;
        holder.cpfCnpj = null;
        holder.mobilePhone = null;
        holder.birthdate = null;
        holder.address = null;

        expect(holder.name).toBeNull();
        expect(holder.cpfCnpj).toBeNull();
        expect(holder.mobilePhone).toBeNull();
        expect(holder.birthdate).toBeNull();
        expect(holder.address).toBeNull();
    });
});
