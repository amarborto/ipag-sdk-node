const ipagClient = require('../config');
const { Webhook, Webhooks } = require('../../index');

const webhook = new Webhook({
    http_method: 'POST',
    url: 'https://ipag-sdk.requestcatcher.com/webhook',
    description: 'Webhook para receber notificações de atualização das transações',
    actions: [
        Webhooks.PAYMENT_LINK_PAYMENT_SUCCEEDED,
        Webhooks.PAYMENT_LINK_PAYMENT_FAILED,
        Webhooks.CHARGE_PAYMENT_SUCCEEDED,
        Webhooks.CHARGE_PAYMENT_FAILED,
        Webhooks.SUBSCRIPTION_PAYMENT_FAILED,
        Webhooks.SUBSCRIPTION_PAYMENT_SUCCEEDED,
    ]
});

ipagClient.webhook().create(webhook)
    .then(response => {
        console.log(response.getData());
    })
    .catch(error => {
        console.log(error.getCode());
        console.log(error.getErrors());
    });
