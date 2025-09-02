const Endpoint = require('../core/endpoint');
const PaymentLink = require('../model/paymentLink');

class PaymentLinksEndpoint extends Endpoint {
    constructor(client, parent) {
        super(client, parent);
        this.location = '/service/resources/payment_links';
    }

    create(paymentLink) {
        const paymentLinkData = paymentLink instanceof PaymentLink ? paymentLink.jsonSerialize() : paymentLink;
        return this._post(paymentLinkData);
    }

    getById(id) {
        return this._get({ id });
    }

    getByExternalCode(externalCode) {
        return this._get({ external_code: externalCode });
    }
}

module.exports = PaymentLinksEndpoint;