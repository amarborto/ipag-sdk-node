const { instanceClient } = require('../IpagClient');
const HttpException = require('../../src/exception/httpException');

describe('EstablishmentTransactionEndpoint', () => {
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

        const establishment_tid = 'bb36c34eb6644ab9694315af7d68e629';

        const responseTransactions = await client.establishment().transaction().listByEstablishment(establishment_tid);
        expect(responseTransactions.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 404,
                data: {
                    code: "404",
                    message: "Establishment Not Found.",
                    data: null
                }
            }
        ]);

        const establishment_tid = 'abc';

        await expect(client.establishment().transaction().listByEstablishment(establishment_tid)).rejects.toThrow(HttpException);
    });
});
