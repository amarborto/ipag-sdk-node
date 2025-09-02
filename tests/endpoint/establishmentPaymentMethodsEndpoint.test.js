const { instanceClient } = require('../IpagClient');
const { PaymentMethod, Acquirer } = require('../../index');
const StoneCredentials = require('../../src/support/credentials/paymentMethods/stoneCredentials');
const HttpException = require('../../src/exception/httpException');

describe('EstablishmentPaymentMethodsEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    data: {
                        provider: "stone",
                        credentials: [],
                        active_brands: [],
                    }
                }
            }
        ]);

        const establishment_tid = 'bb36c34eb6644ab9694315af7d68e629';

        const paymentMethod = new PaymentMethod({
            acquirer: Acquirer.STONE,
            priority: 100,
            environment: 'test',
            capture: true,
            retry: true,
            credentials: new StoneCredentials({
                stone_code: 'xxxxx',
                stone_sak: 'xxxxxx'
            }).jsonSerialize(),
        });

        const responseConfig = await client.establishment().paymentMethods().config(paymentMethod, establishment_tid);
        expect(responseConfig.data.data.provider).toBe('stone');
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        acquirer: [
                            "Acquirer is required",
                            "Acquirer contains an item that is not in the list",
                        ]
                    }
                }
            }
        ]);

        const establishment_tid = 'bb36c34eb6644ab9694315af7d68e629';
        const paymentMethod = new PaymentMethod();

        await expect(client.establishment().paymentMethods().config(paymentMethod, establishment_tid)).rejects.toThrow(HttpException);
    });
});
