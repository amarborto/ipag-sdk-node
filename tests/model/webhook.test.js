const Webhook = require('../../src/model/webhook');

describe('Webhook', () => {
    it('should create a webhook object with the constructor successfully', () => {
        const webhook = new Webhook({
            http_method: 'POST',
            url: 'https://ipag-sdk.requestcatcher.com/webhook',
            description: 'Webhook para receber notificações de atualização das transações',
            actions: [
                'PaymentLinkPaymentSucceeded',
                'PaymentLinkPaymentFailed',
            ]
        });

        expect(webhook.http_method).toBe('POST');
        expect(webhook.url).toBe('https://ipag-sdk.requestcatcher.com/webhook');
        expect(webhook.description).toBe('Webhook para receber notificações de atualização das transações');
        expect(webhook.actions).toEqual([
            'PaymentLinkPaymentSucceeded',
            'PaymentLinkPaymentFailed',
        ]);
    });

    it('should create a webhook object and set the values successfully', () => {
        const webhook = new Webhook();
        webhook.http_method = 'POST';
        webhook.url = 'https://ipag-sdk.requestcatcher.com/webhook';
        webhook.description = 'Webhook para receber notificações de atualização das transações';
        webhook.actions = [
            'PaymentLinkPaymentSucceeded',
            'PaymentLinkPaymentFailed',
        ];

        expect(webhook.http_method).toBe('POST');
        expect(webhook.url).toBe('https://ipag-sdk.requestcatcher.com/webhook');
        expect(webhook.description).toBe('Webhook para receber notificações de atualização das transações');
        expect(webhook.actions).toEqual([
            'PaymentLinkPaymentSucceeded',
            'PaymentLinkPaymentFailed',
        ]);
    });

    it('should create an empty webhook object successfully', () => {
        const webhook = new Webhook();

        expect(webhook.http_method).toBeUndefined();
        expect(webhook.url).toBeUndefined();
        expect(webhook.description).toBeUndefined();
        expect(webhook.actions).toBeUndefined();
    });

    it('should create and set empty properties for a webhook object successfully', () => {
        const webhook = new Webhook({
            http_method: 'POST',
            url: 'https://ipag-sdk.requestcatcher.com/webhook',
            description: 'Webhook para receber notificações de atualização das transações',
            actions: [
                'PaymentLinkPaymentSucceeded',
                'PaymentLinkPaymentFailed',
            ]
        });

        webhook.http_method = null;
        webhook.url = null;
        webhook.description = null;
        webhook.actions = null;

        expect(webhook.http_method).toBeNull();
        expect(webhook.url).toBeNull();
        expect(webhook.description).toBeNull();
        expect(webhook.actions).toBeNull();
    });
});
