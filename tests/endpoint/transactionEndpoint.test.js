const { instanceClient } = require('../IpagClient');
const HttpException = require('../../src/exception/httpException');

describe('TransactionEndpoint', () => {
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

        const responseTransaction = await client.transaction().list();
        expect(responseTransaction.data.id).toBe(1);
    });

    it('should response with fail for unauthenticated client', async () => {
        const client = instanceClient([
            {
                status: 401,
                data: {
                    code: 401,
                    message: "Unauthorized",
                    resource: "authorization"
                }
            }
        ]);

        await expect(client.transaction().list()).rejects.toThrow(HttpException);
    });
});
