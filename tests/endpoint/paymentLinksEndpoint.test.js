const { instanceClient } = require('../IpagClient');
const { PaymentLink } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('PaymentLinksEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'payment_links',
                    attributes: []
                }
            }
        ]);

        const paymentLink = new PaymentLink({
            external_code: '131',
            amount: 0,
            description: 'LINK DE PAGAMENTO SUPER BACANA',
            expireAt: '2020-12-30 23:00:00',
            buttons: {
                enable: false,
            },
            checkout_settings: {
                max_installments: 12,
            },
        });

        const responsePaymentLink = await client.paymentLinks().create(paymentLink);
        expect(responsePaymentLink.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        description: [
                            "Description is required",
                            "Description must be at least 10 characters long",
                        ]
                    }
                }
            }
        ]);

        const paymentLink = new PaymentLink();

        await expect(client.paymentLinks().create(paymentLink)).rejects.toThrow(HttpException);
    });
});
