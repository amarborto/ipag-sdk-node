const Establishment = require('../../src/model/establishment');
const Address = require('../../src/model/address');
const Owner = require('../../src/model/owner');
const Bank = require('../../src/model/bank');

describe('Establishment', () => {
    it('should create an establishment object with the constructor successfully', () => {
        const establishment = new Establishment({
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            login: 'livia',
            password: 'livia123',
            document: '074.598.263-83',
            phone: '(98) 3792-4834',
            address: {
                street: 'Rua A',
            },
            owner: {
                name: 'Lívia Julia Eduarda Barros',
            },
            bank: {
                code: '001'
            }
        });

        expect(establishment.name).toBe('Lívia Julia Eduarda Barros');
        expect(establishment.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(establishment.login).toBe('livia');
        expect(establishment.password).toBe('livia123');
        expect(establishment.document).toBe('074.598.263-83');
        expect(establishment.phone).toBe('(98) 3792-4834');
        expect(establishment.address).toBeInstanceOf(Address);
        expect(establishment.address.street).toBe('Rua A');
        expect(establishment.owner).toBeInstanceOf(Owner);
        expect(establishment.owner.name).toBe('Lívia Julia Eduarda Barros');
        expect(establishment.bank).toBeInstanceOf(Bank);
        expect(establishment.bank.code).toBe('001');
    });

    it('should create an establishment object and set the values successfully', () => {
        const establishment = new Establishment();
        establishment.name = 'Lívia Julia Eduarda Barros';
        establishment.email = 'livia.julia.barros@eximiart.com.br';
        establishment.login = 'livia';
        establishment.password = 'livia123';
        establishment.document = '074.598.263-83';
        establishment.phone = '(98) 3792-4834';
        establishment.address = new Address({
            street: 'Rua A',
        });
        establishment.owner = new Owner({
            name: 'Lívia Julia Eduarda Barros',
        });
        establishment.bank = new Bank({
            code: '001'
        });

        expect(establishment.name).toBe('Lívia Julia Eduarda Barros');
        expect(establishment.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(establishment.login).toBe('livia');
        expect(establishment.password).toBe('livia123');
        expect(establishment.document).toBe('074.598.263-83');
        expect(establishment.phone).toBe('(98) 3792-4834');
        expect(establishment.address).toBeInstanceOf(Address);
        expect(establishment.address.street).toBe('Rua A');
        expect(establishment.owner).toBeInstanceOf(Owner);
        expect(establishment.owner.name).toBe('Lívia Julia Eduarda Barros');
        expect(establishment.bank).toBeInstanceOf(Bank);
        expect(establishment.bank.code).toBe('001');
    });

    it('should create an empty establishment object successfully', () => {
        const establishment = new Establishment();

        expect(establishment.name).toBeUndefined();
        expect(establishment.email).toBeUndefined();
        expect(establishment.login).toBeUndefined();
        expect(establishment.password).toBeUndefined();
        expect(establishment.document).toBeUndefined();
        expect(establishment.phone).toBeUndefined();
        expect(establishment.address).toBeUndefined();
        expect(establishment.owner).toBeUndefined();
        expect(establishment.bank).toBeUndefined();
    });

    it('should create and set empty properties for an establishment object successfully', () => {
        const establishment = new Establishment({
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            login: 'livia',
            password: 'livia123',
            document: '074.598.263-83',
            phone: '(98) 3792-4834',
            address: {
                street: 'Rua A',
            },
            owner: {
                name: 'Lívia Julia Eduarda Barros',
            },
            bank: {
                code: '001'
            }
        });

        establishment.name = null;
        establishment.email = null;
        establishment.login = null;
        establishment.password = null;
        establishment.document = null;
        establishment.phone = null;
        establishment.address = null;
        establishment.owner = null;
        establishment.bank = null;

        expect(establishment.name).toBeNull();
        expect(establishment.email).toBeNull();
        expect(establishment.login).toBeNull();
        expect(establishment.password).toBeNull();
        expect(establishment.document).toBeNull();
        expect(establishment.phone).toBeNull();
        expect(establishment.address).toBeNull();
        expect(establishment.owner).toBeNull();
        expect(establishment.bank).toBeNull();
    });
});
