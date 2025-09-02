const { instanceClient } = require('../IpagClient');
const { SplitRules } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('SplitRulesEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'split_rules',
                    attributes: []
                }
            }
        ]);

        const transactionId = 27;

        const splitRules = new SplitRules({
            receiver_id: "100014",
            percentage: 10.00
        });

        const responseRules = await client.splitRules().create(splitRules, transactionId);
        expect(responseRules.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        receiver_id: [
                            "Receiver Id is required",
                            "Percentage is required",
                        ]
                    }
                }
            }
        ]);

        const transactionId = 27;
        const splitRules = new SplitRules();

        await expect(client.splitRules().create(splitRules, transactionId)).rejects.toThrow(HttpException);
    });
});
