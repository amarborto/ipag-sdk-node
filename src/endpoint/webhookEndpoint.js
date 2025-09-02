const Endpoint = require('../core/endpoint');
const Webhook = require('../model/webhook');

class WebhookEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/webhooks';
    }

    create(webhook) {
        const webhookData = webhook instanceof Webhook ? webhook.jsonSerialize() : webhook;
        return this._post(webhookData);
    }

    get(id) {
        return this._get({ id });
    }

    list(filters = {}) {
        return this._get(filters);
    }

    delete(id) {
        return this._delete({ id });
    }
}

module.exports = WebhookEndpoint;