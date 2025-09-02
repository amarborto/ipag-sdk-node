const { instanceClient } = require('../IpagClient');
const HttpException = require('../../src/exception/httpException');

describe('SellerTransferEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'transfers',
                    attributes: []
                }
            }
        ]);

        const responseTransfers = await client.transfer().seller().list();
        expect(responseTransfers.data.id).toBe(1);
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

        await expect(client.transfer().seller().list()).rejects.toThrow(HttpException);
    });
});
