const Checkout = require('../../src/model/checkout');
const Customer = require('../../src/model/customer');
const InstallmentSetting = require('../../src/model/installmentSetting');
const Order = require('../../src/model/order');
const Product = require('../../src/model/product');
const SplitRules = require('../../src/model/splitRules');

describe('Checkout', () => {
    it('should create a checkout object with the constructor successfully', () => {
        const checkout = new Checkout({
            customer: {
                name: 'Lívia Julia Eduarda Barros',
            },
            installment_setting: {
                max_installments: 12,
            },
            order: {
                order_id: '1000077',
            },
            products: [
                {
                    name: 'Smart TV LG 55 4K UHD',
                },
                {
                    name: 'Smart TV 50" UHD 4K',
                },
            ],
            split_rules: [
                {
                    receiver_id: "1000000",
                },
                {
                    receiver_id: "1000001",
                },
            ],
            seller_id: '100014',
            expires_in: 60,
        });

        expect(checkout.customer).toBeInstanceOf(Customer);
        expect(checkout.customer.name).toBe('Lívia Julia Eduarda Barros');
        expect(checkout.installment_setting).toBeInstanceOf(InstallmentSetting);
        expect(checkout.installment_setting.max_installments).toBe(12);
        expect(checkout.order).toBeInstanceOf(Order);
        expect(checkout.order.order_id).toBe('1000077');
        expect(checkout.products[0]).toBeInstanceOf(Product);
        expect(checkout.products[0].name).toBe('Smart TV LG 55 4K UHD');
        expect(checkout.products[1]).toBeInstanceOf(Product);
        expect(checkout.products[1].name).toBe('Smart TV 50" UHD 4K');
        expect(checkout.split_rules[0]).toBeInstanceOf(SplitRules);
        expect(checkout.split_rules[0].receiver_id).toBe('1000000');
        expect(checkout.split_rules[1]).toBeInstanceOf(SplitRules);
        expect(checkout.split_rules[1].receiver_id).toBe('1000001');
        expect(checkout.seller_id).toBe('100014');
        expect(checkout.expires_in).toBe(60);
    });

    it('should create a checkout object and set the values successfully', () => {
        const checkout = new Checkout();
        checkout.customer = new Customer({
            name: 'Lívia Julia Eduarda Barros',
        });
        checkout.installment_setting = new InstallmentSetting({
            max_installments: 12,
        });
        checkout.order = new Order({
            order_id: '1000077',
        });
        checkout.products = [
            new Product({
                name: 'Smart TV LG 55 4K UHD',
            }),
            new Product({
                name: 'Smart TV 50" UHD 4K',
            }),
        ];
        checkout.split_rules = [
            new SplitRules({
                receiver_id: "1000000",
            }),
            new SplitRules({
                receiver_id: "1000001",
            }),
        ];
        checkout.seller_id = '100014';
        checkout.expires_in = 60;

        expect(checkout.customer).toBeInstanceOf(Customer);
        expect(checkout.customer.name).toBe('Lívia Julia Eduarda Barros');
        expect(checkout.installment_setting).toBeInstanceOf(InstallmentSetting);
        expect(checkout.installment_setting.max_installments).toBe(12);
        expect(checkout.order).toBeInstanceOf(Order);
        expect(checkout.order.order_id).toBe('1000077');
        expect(checkout.products[0]).toBeInstanceOf(Product);
        expect(checkout.products[0].name).toBe('Smart TV LG 55 4K UHD');
        expect(checkout.products[1]).toBeInstanceOf(Product);
        expect(checkout.products[1].name).toBe('Smart TV 50" UHD 4K');
        expect(checkout.split_rules[0]).toBeInstanceOf(SplitRules);
        expect(checkout.split_rules[0].receiver_id).toBe('1000000');
        expect(checkout.split_rules[1]).toBeInstanceOf(SplitRules);
        expect(checkout.split_rules[1].receiver_id).toBe('1000001');
        expect(checkout.seller_id).toBe('100014');
        expect(checkout.expires_in).toBe(60);
    });

    it('should create an empty checkout object successfully', () => {
        const checkout = new Checkout();

        expect(checkout.customer).toBeUndefined();
        expect(checkout.installment_setting).toBeUndefined();
        expect(checkout.order).toBeUndefined();
        expect(checkout.products).toBeUndefined();
        expect(checkout.split_rules).toBeUndefined();
        expect(checkout.seller_id).toBeUndefined();
        expect(checkout.expires_in).toBeUndefined();
    });

    it('should create and set empty properties for a checkout object successfully', () => {
        const checkout = new Checkout({
            customer: {
                name: 'Lívia Julia Eduarda Barros',
            },
            installment_setting: {
                max_installments: 12,
            },
            order: {
                order_id: '1000077',
            },
            products: [
                {
                    name: 'Smart TV LG 55 4K UHD',
                },
                {
                    name: 'Smart TV 50" UHD 4K',
                },
            ],
            split_rules: [
                {
                    receiver_id: "1000000",
                },
                {
                    receiver_id: "1000001",
                },
            ],
            seller_id: '100014',
            expires_in: 60,
        });

        checkout.customer = null;
        checkout.installment_setting = null;
        checkout.order = null;
        checkout.products = null;
        checkout.split_rules = null;
        checkout.seller_id = null;
        checkout.expires_in = null;

        expect(checkout.customer).toBeNull();
        expect(checkout.installment_setting).toBeNull();
        expect(checkout.order).toBeNull();
        expect(checkout.products).toBeNull();
        expect(checkout.split_rules).toBeNull();
        expect(checkout.seller_id).toBeNull();
        expect(checkout.expires_in).toBeNull();
    });
});
