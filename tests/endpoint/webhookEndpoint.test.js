const { instanceClient } = require('../IpagClient');
const { Webhook, Webhooks } = require('../../index');
const HttpException = require('../../src/exception/httpException');

describe('WebhookEndpoint', () => {
    it('should response with success', async () => {
        const client = instanceClient([
            {
                status: 201,
                data: {
                    id: 1,
                    resource: 'webhooks',
                    attributes: []
                }
            }
        ]);

        const webhook = new Webhook({
            http_method: 'POST',
            url: 'https://ipag-sdk.requestcatcher.com/webhook',
            description: 'Webhook para receber notificações de atualização das transações',
            actions: [
                Webhooks.PAYMENT_LINK_PAYMENT_SUCCEEDED,
                Webhooks.PAYMENT_LINK_PAYMENT_FAILED,
            ]
        });

        const responseWebhook = await client.webhook().create(webhook);
        expect(responseWebhook.data.id).toBe(1);
    });

    it('should response with fail for unprocessable data', async () => {
        const client = instanceClient([
            {
                status: 406,
                data: {
                    code: "406",
                    message: {
                        http_method: [
                            "Http Method is required",
                            "Http Method contains an item that is not in the list",
                        ]
                    }
                }
            }
        ]);

        const webhook = new Webhook();

        await expect(client.webhook().create(webhook)).rejects.toThrow(HttpException);
    });
});
