const Voucher = require('../../src/model/voucher');
const Order = require('../../src/model/order');
const Seller = require('../../src/model/seller');
const Customer = require('../../src/model/customer');

describe('Voucher', () => {
    it('should create a voucher object with the constructor successfully', () => {
        const voucher = new Voucher({
            order: {
                order_id: '1000077',
            },
            seller: {
                cpf_cnpj: '074.598.263-83'
            },
            customer: {
                name: 'FULANO DA SILVA',
            },
        });

        expect(voucher.order).toBeInstanceOf(Order);
        expect(voucher.order.order_id).toBe('1000077');
        expect(voucher.seller).toBeInstanceOf(Seller);
        expect(voucher.seller.cpf_cnpj).toBe('074.598.263-83');
        expect(voucher.customer).toBeInstanceOf(Customer);
        expect(voucher.customer.name).toBe('FULANO DA SILVA');
    });

    it('should create a voucher object and set the values successfully', () => {
        const voucher = new Voucher();
        voucher.order = new Order({
            order_id: '1000077',
        });
        voucher.seller = new Seller({
            cpf_cnpj: '074.598.263-83'
        });
        voucher.customer = new Customer({
            name: 'FULANO DA SILVA',
        });

        expect(voucher.order).toBeInstanceOf(Order);
        expect(voucher.order.order_id).toBe('1000077');
        expect(voucher.seller).toBeInstanceOf(Seller);
        expect(voucher.seller.cpf_cnpj).toBe('074.598.263-83');
        expect(voucher.customer).toBeInstanceOf(Customer);
        expect(voucher.customer.name).toBe('FULANO DA SILVA');
    });

    it('should create an empty voucher object successfully', () => {
        const voucher = new Voucher();

        expect(voucher.order).toBeUndefined();
        expect(voucher.seller).toBeUndefined();
        expect(voucher.customer).toBeUndefined();
    });

    it('should create and set empty properties for a voucher object successfully', () => {
        const voucher = new Voucher({
            order: {
                order_id: '1000077',
            },
            seller: {
                cpf_cnpj: '074.598.263-83'
            },
            customer: {
                name: 'FULANO DA SILVA',
            },
        });

        voucher.order = null;
        voucher.seller = null;
        voucher.customer = null;

        expect(voucher.order).toBeNull();
        expect(voucher.seller).toBeNull();
        expect(voucher.customer).toBeNull();
    });
});
