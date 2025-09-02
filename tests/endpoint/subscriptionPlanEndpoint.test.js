const { instanceClient } = require('../IpagClient');
const { SubscriptionPlan } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('SubscriptionPlanEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    type: "plans",
                    attributes: []
                }
            }
        ]);

        const subscriptionPlan = new SubscriptionPlan({
            name: "PLANO SILVER",
            description: "Plano Silver com até 4 treinos por semana",
            amount: 100.99,
            frequency: "monthly",
            interval: 1,
            cycles: 10,
            best_day: true,
            pro_rated_charge: true,
            grace_period: 0,
            callback_url: "https://ipag-sdk.requestcatcher.com/callback",
            trial: {
                amount: 100.99,
                cycles: 10
            }
        });

        const responseSubscriptionPlan = await client.subscriptionPlan().create(subscriptionPlan);
        expect(responseSubscriptionPlan.data.id).toBe(1);
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

        const subscriptionPlan = new SubscriptionPlan();

        await expect(client.subscriptionPlan().create(subscriptionPlan)).rejects.toThrow(HttpException);
    });
});
