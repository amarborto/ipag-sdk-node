const { instanceClient } = require('../IpagClient');
const { Subscription } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('SubscriptionEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'subscriptions',
                    attributes: []
                }
            }
        ]);

        const subscription = new Subscription({
            is_active: true,
            profile_id: 'SUB_018',
            plan_id: 2,
            customer_id: 100003,
            starting_date: '2021-07-11',
            closing_date: '2021-08-11',
            callback_url: 'https://ipag-sdk.requestcatcher.com/callback',
            creditcard_token: null
        });

        const responseSubscription = await client.subscription().create(subscription);
        expect(responseSubscription.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        profile_id: [
                            "Profile Id is required",
                            "Profile Id must not exceed 100 characters",
                        ]
                    }
                }
            }
        ]);

        const subscription = new Subscription();

        await expect(client.subscription().create(subscription)).rejects.toThrow(HttpException);
    });
});
