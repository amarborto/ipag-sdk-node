const { instanceClient } = require('../IpagClient');
const { PaymentTransaction, PaymentTypes, Cards } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('PaymentEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'transactions',
                    attributes: []
                }
            }
        ]);

        const paymentTransaction = new PaymentTransaction({
            amount: 97.86,
            callback_url: "https://ipag-sdk.requestcatcher.com/callback",
            order_id: "1234567",
            payment: {
                type: PaymentTypes.CARD,
                method: Cards.VISA,
                installments: 1,
                card: {
                    holder: "FULANO DA SILVA",
                    number: "4111111111111111",
                    expiry_month: "03",
                    expiry_year: "2021",
                    cvv: "123"
                }
            },
            customer: {
                name: "Jack Jins",
                cpf_cnpj: "799.993.388-01"
            }
        });

        const responsePayment = await client.payment().create(paymentTransaction);
        expect(responsePayment.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        amount: [
                            "Amount is required",
                            "Amount must be numeric",
                        ]
                    }
                }
            }
        ]);

        const paymentTransaction = new PaymentTransaction();

        await expect(client.payment().create(paymentTransaction)).rejects.toThrow(HttpException);
    });
});
