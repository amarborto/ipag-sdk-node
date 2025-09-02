const { instanceClient } = require('../IpagClient');
const { Charge } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('ChargeEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'charges',
                    attributes: []
                }
            }
        ]);

        const charge = new Charge({
            amount: 160.50,
            description: 'Cobrança referente a negociação de débito pendente na Empresa X',
            due_date: '2020-10-30',
            frequency: 1,
            interval: 'month',
            type: 'charge',
            last_charge_date: '2020-10-30',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            auto_debit: false,
            installments: 12,
            is_active: true,
            products: [2],
            customer: {
                name: 'Maria Francisca',
            },
            checkout_settings: {
                max_installments: 12,
            }
        });

        const responseCharge = await client.charge().create(charge);
        expect(responseCharge.data.id).toBe(1);
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

        const charge = new Charge();

        await expect(client.charge().create(charge)).rejects.toThrow(HttpException);
    });
});
