const Seller = require('../../src/model/seller');
const Address = require('../../src/model/address');
const Owner = require('../../src/model/owner');
const Bank = require('../../src/model/bank');

describe('Seller', () => {
    it('should create a seller object with the constructor successfully', () => {
        const seller = new Seller({
            birthdate: '1980-01-01',
            login: "josefrancisco",
            password: "123123",
            name: "José Francisco Silva",
            cpf_cnpj: "854.508.440-42",
            email: "jose@mail.me",
            phone: "(11) 98712-1234",
            description: "XXXXXXXXXXXXXX",
            address: {
                street: "Rua Júlio Gonzalez",
            },
            owner: {
                name: "Giosepe",
            },
            bank: {
                code: "290",
            }
        });

        expect(seller.birthdate).toBe('1980-01-01');
        expect(seller.login).toBe('josefrancisco');
        expect(seller.password).toBe('123123');
        expect(seller.name).toBe('José Francisco Silva');
        expect(seller.cpf_cnpj).toBe('854.508.440-42');
        expect(seller.email).toBe('jose@mail.me');
        expect(seller.phone).toBe('(11) 98712-1234');
        expect(seller.description).toBe('XXXXXXXXXXXXXX');
        expect(seller.address).toBeInstanceOf(Address);
        expect(seller.address.street).toBe('Rua Júlio Gonzalez');
        expect(seller.owner).toBeInstanceOf(Owner);
        expect(seller.owner.name).toBe('Giosepe');
        expect(seller.bank).toBeInstanceOf(Bank);
        expect(seller.bank.code).toBe('290');
    });

    it('should create a seller object and set the values successfully', () => {
        const seller = new Seller();
        seller.birthdate = '1980-01-01';
        seller.login = "josefrancisco";
        seller.password = "123123";
        seller.name = "José Francisco Silva";
        seller.cpf_cnpj = "854.508.440-42";
        seller.email = "jose@mail.me";
        seller.phone = "(11) 98712-1234";
        seller.description = "XXXXXXXXXXXXXX";
        seller.address = new Address({
            street: "Rua Júlio Gonzalez",
        });
        seller.owner = new Owner({
            name: "Giosepe",
        });
        seller.bank = new Bank({
            code: "290",
        });

        expect(seller.birthdate).toBe('1980-01-01');
        expect(seller.login).toBe('josefrancisco');
        expect(seller.password).toBe('123123');
        expect(seller.name).toBe('José Francisco Silva');
        expect(seller.cpf_cnpj).toBe('854.508.440-42');
        expect(seller.email).toBe('jose@mail.me');
        expect(seller.phone).toBe('(11) 98712-1234');
        expect(seller.description).toBe('XXXXXXXXXXXXXX');
        expect(seller.address).toBeInstanceOf(Address);
        expect(seller.address.street).toBe('Rua Júlio Gonzalez');
        expect(seller.owner).toBeInstanceOf(Owner);
        expect(seller.owner.name).toBe('Giosepe');
        expect(seller.bank).toBeInstanceOf(Bank);
        expect(seller.bank.code).toBe('290');
    });

    it('should create an empty seller object successfully', () => {
        const seller = new Seller();

        expect(seller.birthdate).toBeUndefined();
        expect(seller.login).toBeUndefined();
        expect(seller.password).toBeUndefined();
        expect(seller.name).toBeUndefined();
        expect(seller.cpf_cnpj).toBeUndefined();
        expect(seller.email).toBeUndefined();
        expect(seller.phone).toBeUndefined();
        expect(seller.description).toBeUndefined();
        expect(seller.address).toBeUndefined();
        expect(seller.owner).toBeUndefined();
        expect(seller.bank).toBeUndefined();
    });

    it('should create and set empty properties for a seller object successfully', () => {
        const seller = new Seller({
            birthdate: '1980-01-01',
            login: "josefrancisco",
            password: "123123",
            name: "José Francisco Silva",
            cpf_cnpj: "854.508.440-42",
            email: "jose@mail.me",
            phone: "(11) 98712-1234",
            description: "XXXXXXXXXXXXXX",
            address: {
                street: "Rua Júlio Gonzalez",
            },
            owner: {
                name: "Giosepe",
            },
            bank: {
                code: "290",
            }
        });

        seller.birthdate = null;
        seller.login = null;
        seller.password = null;
        seller.name = null;
        seller.cpf_cnpj = null;
        seller.email = null;
        seller.phone = null;
        seller.description = null;
        seller.address = null;
        seller.owner = null;
        seller.bank = null;

        expect(seller.birthdate).toBeNull();
        expect(seller.login).toBeNull();
        expect(seller.password).toBeNull();
        expect(seller.name).toBeNull();
        expect(seller.cpf_cnpj).toBeNull();
        expect(seller.email).toBeNull();
        expect(seller.phone).toBeNull();
        expect(seller.description).toBeNull();
        expect(seller.address).toBeNull();
        expect(seller.owner).toBeNull();
        expect(seller.bank).toBeNull();
    });
});
