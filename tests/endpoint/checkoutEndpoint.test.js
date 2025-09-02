const { instanceClient } = require('../IpagClient');
const { Checkout } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('CheckoutEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'checkout',
                    attributes: []
                }
            }
        ]);

        const checkout = new Checkout({
            customer: {
                name: "Fulano da Silva",
            },
            installment_setting: {
                max_installments: 12,
            },
            order: {
                order_id: "100001",
            },
            products: [
                {
                    name: 'Smart TV LG 55 4K UHD',
                },
                {
                    name: 'LED Android TV 4K UHD LED',
                },
            ],
            split_rules: [
                {
                    receiver: "qwertyuiopasdfghjklzxcvbnm123456",
                },
                {
                    receiver: "654321mnbvcxzlkjhgfdsapoiuytrewq",
                }
            ],
            seller_id: '100014',
            expires_in: 60,
        });

        const responseCheckout = await client.checkout().create(checkout);
        expect(responseCheckout.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        customer: [
                            "Customer is required",
                            "Customer Invalid",
                        ]
                    }
                }
            }
        ]);

        const checkout = new Checkout();

        await expect(client.checkout().create(checkout)).rejects.toThrow(HttpException);
    });
});
