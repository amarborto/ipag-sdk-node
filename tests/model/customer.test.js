const Customer = require('../../src/model/customer');
const Address = require('../../src/model/address');

describe('Customer', () => {
    it('should create a customer object with the constructor successfully', () => {
        const customer = new Customer({
            id: '123',
            uuid: 'abc123',
            tax_receipt: '074.598.263-83',
            birthdate: '1980-01-01',
            ip: '10.0.0.1',
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            cpf_cnpj: '074.598.263-83',
            phone: '(98) 3792-4834',
            business_name: 'Lívia Ltda.',
            is_active: true,
            address: {
                street: 'Rua A',
            },
            billing_address: {
                street: 'Rua A',
            },
            shipping_address: {
                street: 'Rua A',
            },
        });

        expect(customer.id).toBe('123');
        expect(customer.uuid).toBe('abc123');
        expect(customer.tax_receipt).toBe('074.598.263-83');
        expect(customer.birthdate).toBe('1980-01-01');
        expect(customer.ip).toBe('10.0.0.1');
        expect(customer.name).toBe('Lívia Julia Eduarda Barros');
        expect(customer.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(customer.cpf_cnpj).toBe('074.598.263-83');
        expect(customer.phone).toBe('(98) 3792-4834');
        expect(customer.is_active).toBe(true);
        expect(customer.business_name).toBe('Lívia Ltda.');
        expect(customer.address).toBeInstanceOf(Address);
        expect(customer.address.street).toBe('Rua A');
        expect(customer.billing_address).toBeInstanceOf(Address);
        expect(customer.billing_address.street).toBe('Rua A');
        expect(customer.shipping_address).toBeInstanceOf(Address);
        expect(customer.shipping_address.street).toBe('Rua A');
    });

    it('should create a customer object and set the values successfully', () => {
        const customer = new Customer();
        customer.id = '123';
        customer.uuid = 'abc123';
        customer.tax_receipt = '074.598.263-83';
        customer.birthdate = '1980-01-01';
        customer.ip = '10.0.0.1';
        customer.name = 'Lívia Julia Eduarda Barros';
        customer.email = 'livia.julia.barros@eximiart.com.br';
        customer.cpf_cnpj = '074.598.263-83';
        customer.phone = '(98) 3792-4834';
        customer.is_active = true;
        customer.business_name = 'Lívia Ltda.';
        customer.address = new Address({
            street: 'Rua A',
        });
        customer.billing_address = new Address({
            street: 'Rua A',
        });
        customer.shipping_address = new Address({
            street: 'Rua A',
        });

        expect(customer.id).toBe('123');
        expect(customer.uuid).toBe('abc123');
        expect(customer.tax_receipt).toBe('074.598.263-83');
        expect(customer.birthdate).toBe('1980-01-01');
        expect(customer.ip).toBe('10.0.0.1');
        expect(customer.name).toBe('Lívia Julia Eduarda Barros');
        expect(customer.email).toBe('livia.julia.barros@eximiart.com.br');
        expect(customer.cpf_cnpj).toBe('074.598.263-83');
        expect(customer.phone).toBe('(98) 3792-4834');
        expect(customer.is_active).toBe(true);
        expect(customer.business_name).toBe('Lívia Ltda.');
        expect(customer.address).toBeInstanceOf(Address);
        expect(customer.address.street).toBe('Rua A');
        expect(customer.billing_address).toBeInstanceOf(Address);
        expect(customer.billing_address.street).toBe('Rua A');
        expect(customer.shipping_address).toBeInstanceOf(Address);
        expect(customer.shipping_address.street).toBe('Rua A');
    });

    it('should create an empty customer object successfully', () => {
        const customer = new Customer();

        expect(customer.id).toBeUndefined();
        expect(customer.uuid).toBeUndefined();
        expect(customer.tax_receipt).toBeUndefined();
        expect(customer.birthdate).toBeUndefined();
        expect(customer.ip).toBeUndefined();
        expect(customer.name).toBeUndefined();
        expect(customer.email).toBeUndefined();
        expect(customer.cpf_cnpj).toBeUndefined();
        expect(customer.phone).toBeUndefined();
        expect(customer.business_name).toBeUndefined();
        expect(customer.is_active).toBeUndefined();
        expect(customer.address).toBeUndefined();
        expect(customer.billing_address).toBeUndefined();
        expect(customer.shipping_address).toBeUndefined();
    });

    it('should create and set empty properties for a customer object successfully', () => {
        const customer = new Customer({
            id: '123',
            uuid: 'abc123',
            tax_receipt: '074.598.263-83',
            birthdate: '1980-01-01',
            ip: '10.0.0.1',
            name: 'Lívia Julia Eduarda Barros',
            email: 'livia.julia.barros@eximiart.com.br',
            cpf_cnpj: '074.598.263-83',
            phone: '(98) 3792-4834',
            business_name: 'Lívia Ltda.',
            is_active: true,
            address: {
                street: 'Rua A',
            },
            billing_address: {
                street: 'Rua A',
            },
            shipping_address: {
                street: 'Rua A',
            },
        });

        customer.id = null;
        customer.uuid = null;
        customer.tax_receipt = null;
        customer.birthdate = null;
        customer.ip = null;
        customer.name = null;
        customer.email = null;
        customer.cpf_cnpj = null;
        customer.phone = null;
        customer.is_active = null;
        customer.business_name = null;
        customer.address = null;
        customer.billing_address = null;
        customer.shipping_address = null;

        expect(customer.id).toBeNull();
        expect(customer.uuid).toBeNull();
        expect(customer.tax_receipt).toBeNull();
        expect(customer.birthdate).toBeNull();
        expect(customer.ip).toBeNull();
        expect(customer.name).toBeNull();
        expect(customer.email).toBeNull();
        expect(customer.cpf_cnpj).toBeNull();
        expect(customer.phone).toBeNull();
        expect(customer.is_active).toBeNull();
        expect(customer.business_name).toBeNull();
        expect(customer.address).toBeNull();
        expect(customer.billing_address).toBeNull();
        expect(customer.shipping_address).toBeNull();
    });
});
